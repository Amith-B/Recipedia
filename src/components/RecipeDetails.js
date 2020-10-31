import React, { useEffect, useRef } from "react";
import "./RecipeDetails.css";

function RecipeDetails({ showRecipe, onCancel }) {
  const ingredients = useRef();

  useEffect(() => {
    ingredients.current.addEventListener("wheel", (event) => {
      const toLeft = event.deltaY < 0 && ingredients.current.scrollLeft > 0;
      const toRight =
        event.deltaY > 0 &&
        ingredients.current.scrollLeft <
          ingredients.current.scrollWidth - ingredients.current.clientWidth;

      if (toLeft || toRight) {
        event.preventDefault();
        ingredients.current.scrollLeft += event.deltaY;
      }
    });
  }, []);

  return (
    <div className={"showRecipeContainer"}>
      <div className={"showRecipe"}>
        <div className={"recipeContent"}>
          <p className={"showRecipeTitle"}>{showRecipe.title}</p>
          <div className={"closeButton"} onClick={() => onCancel()}>
            <i
              className={"fa fa-close"}
              style={{ paddingTop: ".2em", fontSize: "2em" }}
              aria-hidden="true"
            />
          </div>
          <div className={"contentContainer"}>
            <div className={"showRecipeImage"}>
              <img
                width="100%"
                height="100%"
                src={showRecipe.image}
                alt={"recipeImage"}
              />
            </div>
            <h3
              style={{
                textAlign: "left",
                marginTop: "1em",
                marginBottom: "1em",
              }}
            >
              Summary
            </h3>
            <div
              className={"recipeSummary"}
              dangerouslySetInnerHTML={{ __html: showRecipe.summary }}
            />
            <h3
              style={{
                textAlign: "left",
                marginTop: "1em",
                marginBottom: "1em",
              }}
            >
              Ingredients
            </h3>
            <div ref={ingredients} className={"ingredients"}>
              {/* https://spoonacular.com/cdn/ingredients_100x100/ */}

              {showRecipe.extendedIngredients &&
                showRecipe.extendedIngredients.map((data, index) => (
                  <div className={"ingredientCard"} key={index}>
                    <p
                      title={`${data.measures.metric.amount} ${data.measures.metric.unitLong}`}
                      className={"measure"}
                    >{`${data.measures.metric.amount} ${data.measures.metric.unitShort}`}</p>
                    {data.image && (
                      <img
                        src={`https://spoonacular.com/cdn/ingredients_100x100/${data.image}`}
                        alt={"ingredientImage"}
                      />
                    )}
                    <p>{data.name}</p>
                  </div>
                ))}
            </div>
            {showRecipe.instructions && (
              <>
                <h3
                  style={{
                    textAlign: "left",
                    marginTop: "1em",
                    marginBottom: "1em",
                  }}
                >
                  Instructions
                </h3>
                <div
                  className={"recipeInstructions"}
                  dangerouslySetInnerHTML={{ __html: showRecipe.instructions }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
