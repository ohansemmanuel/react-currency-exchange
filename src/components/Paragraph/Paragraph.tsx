import React from "react";
import { StyledParagraph } from "./Paragraph.styles";

export interface ParagraphProps {
  children: React.ReactNode;
  small?: boolean;
  color?: string;
  style?: object;
  dataTestId?: string;
}

export const Paragraph = ({
  children,
  small,
  color,
  style,
  dataTestId = "",
}: ParagraphProps) => {
  return (
    <StyledParagraph
      small={small}
      color={color}
      style={style}
      data-testid={dataTestId}
    >
      {children}
    </StyledParagraph>
  );
};
