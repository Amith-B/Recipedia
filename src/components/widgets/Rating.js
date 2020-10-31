import React, { useState } from "react";

function Rating({ rating, onClick }) {
  const ratingIndex = [1, 2, 3, 4, 5];

  const [customRating, setCustomRating] = useState("");

  return (
    <div>
      {ratingIndex.map((starIndex) => (
        <i
          onClick={() => onClick && onClick(customRating)}
          key={starIndex}
          onMouseEnter={() => setCustomRating(starIndex)}
          onMouseLeave={() => setCustomRating("")}
          className={`fa fa-star${
            (customRating || rating) >= starIndex ? "" : "-o"
          }`}
          aria-hidden="true"
          style={{ cursor: "pointer" }}
        />
      ))}
    </div>
  );
}

export default Rating;
