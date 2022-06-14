import styled from "styled-components"

export const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 5vw 1fr 5vw;
  /* grid-template-rows: 1fr 40px min-content; */
  grid-template-rows: 40px min-content 1fr 40px 40px;

  .gatsby-image-wrapper {
    grid-column: 1 / -1;
    grid-row: 1 / span 4;

    max-height: 500px;
  }

  button {
    z-index: 1;
    grid-column: 2;
    grid-row: 4 / span 2;
    align-self: center;
    justify-self: center;

    font-size: 16pt;
    background: ${props => props.theme.colors.linkDark};
    color: ${props => props.theme.grayscale.light1};

    &:hover {
      transform: scale(1.05);
      box-shadow: 3px 3px 10px ${props => props.theme.grayscale.dark1};
    }
  }

  /* h1 {
    grid-column: 2;
    grid-row: 1 / span 2;

    z-index: 1;
    background: ${props => props.theme.grayscale.dark4};
    color: ${props => props.theme.grayscale.light1};
    padding: 10px;
    text-align: center;
  } */
`
