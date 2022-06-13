import styled from "styled-components"

export const TeamPageContainer = styled.section`
  .team-hero {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    width: 100%;
    max-width: 800px;
    margin: 0 auto 30px;

    h1 {
      grid-column: 2;
      grid-row: 2 / span 2;
    }
    .gatsby-image-wrapper {
      grid-column: 2;
      grid-row: 1 / span 2;
      max-height: 250px;
      background: ${props => props.theme.grayscale.dark2};
    }

    h1 {
      z-index: 1;

      background: #333;
      width: fit-content;
      height: fit-content;
      padding: 15px;
      color: white;
      align-self: end;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    .gatsby-image-wrapper {
      width: 100%;
      max-width: 200px;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    p {
      max-width: 500px;
      line-height: 18pt;
    }

    @media ${props => props.theme.breakpoints.tablet} {
      flex-direction: row;
    }
  }

  .member-image {
    align-self: center;
    text-align: center;
  }
`
