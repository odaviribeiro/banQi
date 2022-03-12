type ISpaceNumber = number;
export type ISpaces = {
  // The property will be a type of string:
  [key: string]: `${ISpaceNumber}%` | `${ISpaceNumber}px` | undefined;
};

export type ISpaces2 = {
  // The property will be a type of string:
  [key: string]:
    | "padding"
    | "padding-top"
    | "paddin-right"
    | "padding-bottom"
    | "padding-left"
    | "padding-horizontal"
    | "padding-vertical"
    | "padding-start"
    | "margin"
    | "margin-top"
    | "margin-right"
    | "margin-bottom"
    | "margin-left"
    | "margin-horizontal"
    | "margin-vertical"
    | "margin-start";
};

export type Space = {
  m?: ISpaces[keyof ISpaces];
  mt?: ISpaces[keyof ISpaces];
  mb?: ISpaces[keyof ISpaces];
  ml?: ISpaces[keyof ISpaces];
  mr?: ISpaces[keyof ISpaces];
  mx?: ISpaces[keyof ISpaces];
  my?: ISpaces[keyof ISpaces];
  p?: ISpaces[keyof ISpaces];
  pt?: ISpaces[keyof ISpaces];
  pb?: ISpaces[keyof ISpaces];
  pl?: ISpaces[keyof ISpaces];
  pr?: ISpaces[keyof ISpaces];
  px?: ISpaces[keyof ISpaces];
  py?: ISpaces[keyof ISpaces];
  br?: ISpaces[keyof ISpaces];
};

export const createSpaceStyle = (props: any) => {
  const propKeys: ISpaces2 = {
    p: "padding",
    pt: "padding-top",
    pr: "paddin-right",
    pb: "padding-bottom",
    pl: "padding-left",
    px: "padding-horizontal",
    py: "padding-vertical",
    ps: "padding-start",
    m: "margin",
    mt: "margin-top",
    mr: "margin-right",
    mb: "margin-bottom",
    ml: "margin-left",
    mx: "margin-horizontal",
    my: "margin-vertical",
    ms: "margin-start",
  };

  const computedStyle: ISpaces = {};

  Object.keys(propKeys).map((propKey: string) => {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      computedStyle[styleProperty] = props[propKey];
    }
  });

  return computedStyle;
};
