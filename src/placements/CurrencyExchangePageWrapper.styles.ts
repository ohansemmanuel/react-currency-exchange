import styled from "styled-components";
import { media } from "../utils/responsiveStyledComponents";
import { BLUE } from "../colors";

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
  background: ${() => BLUE};
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
  position: relative;
  height: 80%;
  width: 300px;
  border-radius: 5px;
  box-shadow: 4px 4px 10px 5px rgba(0, 0, 0, 0.05);
  background-image: linear-gradient(to bottom, white 50%, #f3f4f6 50%);
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;

  ${media.mobile`
     width: 100vw;
     height: 100vh;
     box-shadow: 0;
     padding: 2rem;
     border-radius: 0;
  `}
`;
