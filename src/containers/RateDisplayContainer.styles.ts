import styled from "styled-components";
import { Paragraph } from "../components/Paragraph";
import { ASH, BLUE } from "../colors";

export const StyledRateDisplayParagraph = styled(Paragraph)`
  color: ${() => BLUE};
  background: "#ffffff";
  border: ${() => `2px solid ${ASH}`};
  border-radius: "10px";
  padding: "4px 0";
  position: "absolute";
  top: "-10px";
  left: "calc(50% - 50px)";
  min-width: "100px";
  text-align: "center";
`;

const MIN_WIDTH = 150;
export const modifiedParagraphStyles = {
  color: BLUE,
  background: "#ffffff",
  border: `2px solid ${ASH}`,
  borderRadius: "10px",
  padding: "4px 0",
  position: "absolute",
  top: "-10px",
  left: `calc(50% - ${MIN_WIDTH / 2}px)`,
  minWidth: `${MIN_WIDTH}px`,
  textAlign: "center",
};
