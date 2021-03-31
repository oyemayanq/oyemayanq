import React from "react";

const SemiCircle = ({
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
      height="3rem"
      width="3rem"
      style={{
        gridColumn: gridCol,
        gridRow: gridRow,
        justifySelf: "center",
        alignSelf: "center",
        transform: `rotate(${rotate}deg)`,
      }}
      className="layer"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20V17C13.2386 17 11 14.7614 11 12C11 9.23858 13.2386 7 16 7V4Z"
        fill={color}
      />
    </svg>
  );
};

export default SemiCircle;
