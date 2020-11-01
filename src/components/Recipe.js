import React, { useEffect, useState } from "react";
import http from "../services/httpService";
import Card from "./widgets/Card";
import fakeData from "../services/random100.json";
import RecipeDetails from "./RecipeDetails";
import Pagination from "./Pagination";
import "./Recipe.css";
import Loading from "./Loading";
import { toast } from "react-toastify";

function Recipe({
  search,
  setSearchString,
  onSearch,
  setOnSearch,
  showSearch,
  transition,
}) {
  const [recipes, setRecipes] = useState();
  const [showRecipe, setShowRecipe] = useState(null);
  const [pageActive, setPageActive] = useState(0);
  const [paginateVisible, setPaginateVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const getRandomRecipes = async () => {
    setLoading(true);
    try {
      const response = await http.get(
        "https://api.spoonacular.com/recipes/random?number=50&apiKey=9f590e2edc584f3b84261fd0ac04ab8a"
      );
      setRecipes(response.data["recipes"]);
    } catch (error) {
      toast.error(
        "Unable to get recipes from the api, so displaying the locally stored 50 recipes"
      );
      setRecipes(fakeData["recipes"]);
    }
    setLoading(false);
    setPaginateVisible(false);

    setSearchString("");
  };

  const getSearchedRecipes = async (search, startIndex = 0, number = 50) => {
    setLoading(true);

    try {
      const response1 = await http.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${search}&offset=${startIndex}&number=${number}&apiKey=9f590e2edc584f3b84261fd0ac04ab8a`
      );
      let ids = response1.data["results"];
      let idStr = "";
      ids.map((d, i) => {
        if (i === 0) idStr += d.id;
        else idStr += "," + d.id;

        return d.id;
      });

      const response2 = await http.get(
        `https://api.spoonacular.com/recipes/informationBulk?ids=${idStr}&apiKey=9f590e2edc584f3b84261fd0ac04ab8a`
      );
      setRecipes(response2.data);
      setPaginateVisible(true);
    } catch (error) {
      toast.error(
        "Unable to get recipes from the api, refresh the page to display locally stored 50 recipes"
      );
      setPaginateVisible(false);
    }
    setLoading(false);
    //setRecipes(fakeData["recipes"]);
  };

  //useEffect(transition, []); // eslint-disable-line react-hooks/exhaustive-deps

  //useEffect(showSearch, []); // eslint-disable-line react-hooks/exhaustive-deps

  //useEffect(() => console.log(search), [search]);

  useEffect(() => {
    onSearch && getSearchedRecipes(search);
    setOnSearch(false);
    return () => {
      setRecipes(null);
      setPaginateVisible(false);
      setLoading(false);
      setShowRecipe(null);
    };
  }, [onSearch]); // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect(() => {
  //   getSearchedRecipes(search, pageActive * 50);
  //   return () => {
  //     setRecipes(null);
  //     setPaginateVisible(false);
  //     setLoading(false);
  //     setShowRecipe(null);
  //   };
  // }, [pageActive]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    transition();
    getRandomRecipes();
    showSearch();
    return () => {
      setRecipes(null);
      setPaginateVisible(false);
      setLoading(false);
      setShowRecipe(null);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className={"refreshButton"} onClick={() => getRandomRecipes()}>
        <i
          className={"fa fa-refresh"}
          style={{
            paddingTop: ".2em",
            color: "white",
            fontSize: "2em",
          }}
          aria-hidden="true"
        />
      </div>
      <div className={"recipeCardsContainer"}>
        {/* {JSON.stringify(recipes)} */}
        {recipes &&
          recipes.map((data) => (
            <Card
              onClick={() => {
                //console.log(data.title);
                setShowRecipe(data);
              }}
              key={data.id}
              imageUrl={data.image}
              recipeTitle={data.title}
              recipeRating={4}
              recipeRatingNumbers={data.aggregateLikes}
              readyInMinutes={data.readyInMinutes}
            />
          ))}

        {showRecipe && (
          <RecipeDetails
            showRecipe={showRecipe}
            onCancel={() => setShowRecipe(null)}
          />
        )}
        {loading && <Loading />}
        {paginateVisible && (
          <Pagination
            pageActive={pageActive}
            setPage={(page) => {
              getSearchedRecipes(search, page * 50);
              setPageActive(page);
            }}
          />
        )}
      </div>
    </>
  );
}

export default Recipe;
