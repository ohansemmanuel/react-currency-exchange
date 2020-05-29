import styled from "styled-components";
import { media } from "../utils/responsiveStyledComponents";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const StyledCircularBG = styled.div`
  width: 95vh;
  height: 95vh;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.tablet`
     width: 100vw;
     height: 100vh;
     border-radius: 0;
  `}
`;

export const StyledContentContainer = styled.main`
  height: 80%;
  width: 300px;
  box-shadow: 4px 4px 10px 5px rgba(0, 0, 0, 0.05);

  ${media.mobile`
     width: 100vw;
     height: 100vh;
     box-shadow: 0;
  `}
`;