import styled from "styled-components";

import Nav from "./Nav";

const StyledUH = styled.header`
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  z-index: 1;
`;
const UH = () => (
  <StyledUH>
    <Nav />
  </StyledUH>
);

export default UH;
