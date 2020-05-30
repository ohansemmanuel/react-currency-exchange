import styled from "styled-components";
import { ASH, BLUE } from "../../colors";

export const StyledButtonWrapper = styled.button`
  outline: 0;
  font-size: 1.2rem;
  border: ${() => `2px solid ${ASH}`};
  background: white;

  &:active {
    border: ${() => `2px solid ${BLUE}`};
  }
`;
