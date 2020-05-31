import React from "react";
import { StyledParagraph } from "./Paragraph.styles";

export interface ParagraphProps {
  children: React.ReactNode;
  small?: boolean;
  color?: string;
  style?: object;
}

export const Paragraph = ({
  children,
  small,
  color,
  style,
}: ParagraphProps) => {
  return (
    <StyledParagraph small={small} color={color} style={style}>
      {children}
    </StyledParagraph>
  );
};
