import styled, { css } from "styled-components";

const topBottomCSS = css`
  flex: 0 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledTopContentWrapper = styled.section`
  ${topBottomCSS}
`;

export const StyledBottomContentWrapper = styled.section`
  ${topBottomCSS}
`;

const MiddleContentHeight = 30;
export const StyledMiddleContentWrapper = styled.section`
  position: absolute;
  left: 0;
  top: ${() => `calc(50% - ${MiddleContentHeight / 2}px)`};
  width: 100%;
  height: ${() => `${MiddleContentHeight}px`};
  padding: 0 0 0 10px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  width: 100%;

  > :first-child {
    margin-right: auto;
  }
`;
