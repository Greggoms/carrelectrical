import styled from "styled-components"

export const LayoutContainer = styled.div`
  display: grid;

  /* 
  This will change as components are added or removed
  from ../components/Layout.js
  */
  grid-template-rows: min-content min-content 1fr min-content;

  background: ${props => props.theme.grayscale.light1};
  min-height: 100vh;
  margin: 0 auto;
  width: 100%;

  @media ${props => props.theme.breakpoints.tablet} {
    width: 95vw;
    max-width: 1800px;
  }

  .content-padding {
    padding: 10px;
  }

  main {
    #gatsby-focus-wrapper {
      height: 100%;
    }

    /* Introduced for the reviews scroll snapping */
    overflow: hidden;
  }
`
