import styled, { css } from "styled-components";
import { ASH, BLUE, GRAY } from "../../colors";

const buttonCtaStyles = css`
  background: ${BLUE};
  width: 100%;
  padding: 0.65rem 0;
  text-align: center;
  color: white;
  border-radius: 2rem;
  font-size: 0.75rem;
  position: relative;
  bottom: -50px;
`;

export const StyledButtonWrapper = styled.button<{ cta?: boolean }>`
  outline: 0;
  font-size: 0.85rem;
  padding: 4px;
  border: ${() => `2px solid ${ASH}`};
  background: white;
  color: ${() => BLUE};
  cursor: pointer;
  font-weight: 700;
  ${(props) => props.cta && buttonCtaStyles}

  &:disabled {
    background: ${() => GRAY};
  }
  &:active {
    border: ${() => `2px solid ${BLUE}`};
    color: black;
  }
`;
