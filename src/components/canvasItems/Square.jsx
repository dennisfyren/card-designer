import React from "react";
import { Rect } from "react-konva";

function Square({ height, width, color, ...props }) {
  return <Rect width={width} height={height} fill={color} {...props} />;
}

export default Square;
