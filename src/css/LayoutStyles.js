import styled from "styled-components"

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr min-content;

  background: ${props => props.theme.grayscale.light1};
  min-height: 100vh;
  margin: 0 auto;
  width: 100vw;

  @media ${props => props.theme.breakpoints.tablet} {
    width: 95vw;
  }

  main {
    padding: 0 5vw;
  }

  .main-content {
    padding: 10px;
  }
`
