import React, { ReactNode } from "react";
import theme from "@/theme";
import Box, { IBox } from "./index.style";

interface ICard extends IBox {
  children: ReactNode;
}

const Card: React.FC<ICard> = ({ children }) => {
  return (
    <Box
      style={{
        backgroundColor: theme.colors.white,
        shadowColor: theme.colors.secondary,
        shadowOffset: {
          width: 2,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
      }}
    >
      {children}
    </Box>
  );
};

export default Card;
