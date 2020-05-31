import styled from "styled-components";
import { ASH, BLUE } from "../../colors";

export const StyledButtonWrapper = styled.button`
  outline: 0;
  font-size: 0.85rem;
  padding: 4px;
  border: ${() => `2px solid ${ASH}`};
  background: white;
  color: ${() => BLUE};
  cursor: pointer;
  font-weight: 700;

  &:active {
    border: ${() => `2px solid ${BLUE}`};
    color: black;
  }
`;
