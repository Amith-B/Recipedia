import React, { useRef, useEffect } from "react";
import "./Pagination.css";

function Pagination({ pageActive = 0, setPageActive }) {
  const paginateRef = useRef();

  useEffect(() => {
    paginateRef.current.addEventListener("wheel", (event) => {
      const toLeft = event.deltaY < 0 && paginateRef.current.scrollLeft > 0;
      const toRight =
        event.deltaY > 0 &&
        paginateRef.current.scrollLeft <
          paginateRef.current.scrollWidth - paginateRef.current.clientWidth;

      if (toLeft || toRight) {
        event.preventDefault();
        paginateRef.current.scrollLeft += event.deltaY;
      }
    });
  }, []);

  return (
    <div style={{ width: "100%", marginTop: "2em" }}>
      <div ref={paginateRef} className="pagination_section">
        {/* <div>1</div>
        <div>2</div>
        <div>3</div>
        <div className="active">4</div>
        <div>5</div> */}
        {[...Array(20).keys()].map((d, i) => (
          <div
            onClick={() => setPageActive(i)}
            key={i}
            className={pageActive === i ? "active" : ""}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
