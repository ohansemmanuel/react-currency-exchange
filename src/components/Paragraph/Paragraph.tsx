import React from "react";
import { StyledParagraph } from "./Paragraph.styles";

export interface ParagraphProps {
  children: React.ReactNode;
  small?: boolean;
  color?: string;
}

export const Paragraph = ({ children, small, color }: ParagraphProps) => {
  return (
    <StyledParagraph small={small} color={color}>
      {children}
    </StyledParagraph>
  );
};
