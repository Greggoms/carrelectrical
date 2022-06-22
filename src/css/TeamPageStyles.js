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

  .member-card {
    display: grid;
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
    z-index: 1;
    grid-column: 1;
    grid-row: 1;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: min-content min-content;
    align-items: center;
    gap: 20px;

    @media ${props => props.theme.breakpoints.tablet} {
      grid-template-columns: 1fr 1fr;
    }
  }

  p {
    max-width: 500px;
    line-height: 18pt;
  }

  .member-image {
    z-index: 1;
    grid-column: 1;
    grid-row: 1;

    justify-self: center;
    color: ${props => props.theme.grayscale.light1};

    &__text {
      padding: 5px 0;
    }
  }

  .bio {
    z-index: 1;
    grid-column: 1;
    grid-row: 2;
    justify-self: center;

    background: ${props => props.theme.grayscale.light1};
    /* background: rgba(255, 255, 255, 0.8); */
    padding: 10px;

    @media ${props => props.theme.breakpoints.tablet} {
      grid-column: 2;
      grid-row: 1;
    }
  }

  .path,
  .under-path {
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    height: 100%;

    /* @media ${props => props.theme.breakpoints.tablet} {
      grid-column: 1 / -1;
    } */
  }

  .path {
    background: ${props => props.theme.grayscale.dark4};
    clip-path: polygon(20% 0%, 100% 80%, 100% 100%, 0% 100%, 0% 0%);
  }

  .under-path {
    background: ${props => props.theme.colors.red};
    clip-path: polygon(30% 0%, 100% 70%, 100% 100%, 0% 100%, 0% 0%);
  }
`
