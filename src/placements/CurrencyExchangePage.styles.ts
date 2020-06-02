import styled from "styled-components";

export const StyledTopBottomContentWrapper = styled.section`
  flex: 0 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
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
