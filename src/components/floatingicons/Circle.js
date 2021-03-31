import React from "react";

const Circle = ({
  colStart = 0,
  colEnd = 0,
  rowStart = 0,
  rowEnd = 0,
  color,
  speed,
}) => {
  let gridCol = "auto";
  let gridRow = "auto";
  if (colStart) {
    gridCol = `${colStart}/${colEnd}`;
  }
  if (rowStart) {
    gridRow = `${rowStart}/${rowEnd}`;
  }
  return (
    <svg
      data-speed={speed}
      data-rotate={0}
      width="2rem"
      height="2rem"
      style={{
        gridColumn: gridCol,
        gridRow: gridRow,
        justifySelf: "center",
        alignSelf: "center",
      }}
      className="layer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"
      ></path>
    </svg>
  );
};

export default Circle;
