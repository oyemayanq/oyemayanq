import React from "react";

const CaretDown = ({
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
      width="2.4rem"
      height="2.4rem"
      style={{
        gridColumn: gridCol,
        gridRow: gridRow,
        justifySelf: "center",
        alignSelf: "center",
        transform: `rotate(${rotate}deg)`,
      }}
      xmlns="http://www.w3.org/2000/svg"
      className="layer"
      viewBox="0 0 16 16"
    >
      <path
        fill={color}
        d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
      />
    </svg>
  );
};

export default CaretDown;
