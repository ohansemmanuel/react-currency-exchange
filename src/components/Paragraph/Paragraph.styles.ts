import styled from "styled-components";
import { ParagraphProps } from "./Paragraph";
import { GRAY } from "../../colors";

export const StyledParagraph = styled.p<Omit<ParagraphProps, "children">>`
  font-size: ${({ small }) => (small ? "1rem" : "0.9rem")};
  color: ${({ color }) => color || GRAY};
  font-weight: 400;
`;
