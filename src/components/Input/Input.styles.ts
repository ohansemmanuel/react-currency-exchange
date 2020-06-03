import styled from "styled-components";
import { BLUE } from "../../colors";

export const StyledInput = styled.input`
  padding: 0.6em 1.4em 0.5em 0.8em;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.3;
  width: 120px;
  border: 0;
  outline: 0;
  border-radius: 5px;
  background: transparent;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);

  &:focus {
    color: ${() => BLUE};
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
`;

export const StyledSuffixWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.3;
  margin-right: 5px;
`;
