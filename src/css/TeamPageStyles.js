import styled from "styled-components"
import teamImg from "../images/team.jpg"

export const TeamPageContainer = styled.section`
  .member-card {
    display: grid;

    .path {
      grid-column: 1;
      grid-row: 1;
      width: 100%;
      height: 100%;
      background: ${props => props.theme.grayscale.dark4};

      clip-path: polygon(20% 0%, 100% 80%, 100% 100%, 0% 100%, 0% 0%);
    }
    li {
      z-index: 1;
      grid-column: 1;
      grid-row: 1;
    }
  }

  .under-path {
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    height: 100%;
    /* background-image: url(${teamImg}); */
    background-size: cover;
  }

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
    gap: 50px;
    /* align-items: center; */

    max-width: 800px;
    margin: 0 auto;

    .gatsby-image-wrapper {
      width: 100%;
      max-width: 225px;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 10px;

    p {
      max-width: 500px;
      line-height: 18pt;
    }

    .bio {
      background: ${props => props.theme.grayscale.light1};
      padding: 10px;
    }

    @media ${props => props.theme.breakpoints.tablet} {
      flex-direction: row;
    }
  }

  .member-image {
    align-self: center;
    text-align: center;

    &__text {
      background: ${props => props.theme.grayscale.dark3};
      color: ${props => props.theme.grayscale.light1};
      padding: 5px;
    }
  }
`
