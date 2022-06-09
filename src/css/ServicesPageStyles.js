import styled from "styled-components"

export const ServicesPageContainer = styled.section`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 30px;
    row-gap: 60px;

    list-style-type: none;

    @media ${props => props.theme.breakpoints.desktop} {
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 30px;
    }
  }

  ul li {
    @media ${props => props.theme.breakpoints.desktop} {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }

    p,
    .gatsby-image-wrapper {
      grid-column: 1;
      grid-row: 1;
    }

    p {
      align-self: flex-start;

      z-index: 1;
      background: rgba(53, 53, 53, 0.7);
      color: ${props => props.theme.grayscale.light1};
      padding: 10px;
      font-weight: 800;

      @media ${props => props.theme.breakpoints.desktop} {
        font-size: 18pt;
      }
    }
  }
`
