import React from "react";

const Line = ({
  colStart = 0,
  colEnd = 0,
  rowStart = 0,
  rowEnd = 0,
  color,
  rotate = 0,
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
      data-rotate={rotate}
      height="1.8rem"
      width="1.8rem"
      style={{
        gridColumn: gridCol,
        gridRow: gridRow,
        justifySelf: "center",
        alignSelf: "center",
        transform: `rotate(${rotate}deg)`,
      }}
      className="layer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 409.6 409.6"
    >
      <path
        fill={color}
        d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467
  c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z"
      />
    </svg>
  );
};

export default Line;
