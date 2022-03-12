type Direction = "flex-start" | "flex-end" | "center";

export type Flex = {
  flexD?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | Direction
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: Direction | "baseline" | "stretch";
  alignContent?: Direction | "space-between" | "space-around" | "stretch";
  w?: string;
  h?: string;
  minW?: string;
  minH?: string;
  flex?: number;
  bw?: number;
  bs?: "solid" | "dotted" | "dashed";
};
