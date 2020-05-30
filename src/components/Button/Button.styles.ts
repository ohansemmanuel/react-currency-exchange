import styled from "styled-components";
import { ASH, BLUE } from "../../colors";

export const StyledButtonWrapper = styled.button`
  outline: 0;
  font-size: 1rem;
  border: ${() => `2px solid ${ASH}`};

  &:active {
    border: ${() => `2px solid ${BLUE}`};
  }
`;
