import React from 'react';

export interface ScrollingTextProps extends React.PropsWithChildren  {
  content: string[];
  slideFrom?: Direction;
  slideTo?: Direction;
  color?: string;
  backgroundColor?: string;
}

export enum Direction {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}
