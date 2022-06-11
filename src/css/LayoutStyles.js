import styled from "styled-components"

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr min-content;

  background: ${props => props.theme.grayscale.light1};
  min-height: 100vh;
  margin: 0 auto;
  width: 100%;

  @media ${props => props.theme.breakpoints.tablet} {
    width: 95vw;
    max-width: 1800px;
  }

  main {
    padding: 10px;

    #gatsby-focus-wrapper {
      max-width: 1500px;
      margin: 0 auto;
    }

    /* Introduced for the reviews scroll snapping */
    overflow: hidden;
  }
`
