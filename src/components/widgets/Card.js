import React, { useRef, useEffect } from "react";
import "./Card.css";
//import Rating from "./Rating";

function Card({
  imageUrl,
  recipeTitle,
  recipeRating,
  recipeRatingNumbers,
  readyInMinutes,
  onClick,
}) {
  const title = useRef();
  //const num = 3;

  useEffect(() => {
    title.current.addEventListener("wheel", (event) => {
      const toLeft = event.deltaY < 0 && title.current.scrollLeft > 0;
      const toRight =
        event.deltaY > 0 &&
        title.current.scrollLeft <
          title.current.scrollWidth - title.current.clientWidth;

      if (toLeft || toRight) {
        event.preventDefault();
        title.current.scrollLeft += event.deltaY;
      }
    });
  }, []);

  return (
    <div className={"recipeCard"} onClick={() => onClick()}>
      <div className={"recipeImage"}>
        <img src={imageUrl} alt={"recipe"}></img>
      </div>
      <div className={"recipeTitle"} ref={title}>
        {recipeTitle}
      </div>
      <div className={"ratingContainer"}>
        {/* <div className={"recipeRating"}>
          <Rating
            rating={num}
            onClick={(rating) => console.log("Rating", rating)}
          />
        </div> */}
        <i
          className={"fa fa-heart"}
          style={{ paddingTop: ".2em" }}
          aria-hidden="true"
        />
        <div className={"recipeRatingNumbers"}>{recipeRatingNumbers}</div>
      </div>
      <div className={"ready"}>
        <i className={"fa fa-clock-o"} aria-hidden="true" />
        {readyInMinutes} mins
      </div>
    </div>
  );
}

export default Card;
