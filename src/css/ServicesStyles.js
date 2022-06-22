import styled from "styled-components"

export const ServicesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media ${props => props.theme.breakpoints.desktop} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    /* column-gap: 40px; */
  }

  h2 {
    margin-bottom: 10px;
    text-align: center;
    font-weight: 200;
    font-size: 26pt;

    @media ${props => props.theme.breakpoints.desktop} {
      text-align: left;
    }
  }

  ul {
    margin-left: 20px;
    font-weight: 700;

    li:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  .service {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;

    @media ${props => props.theme.breakpoints.desktop} {
      grid-template-columns: 80px 1fr 80px;
      grid-template-rows: 80px 1fr 80px;
      align-items: flex-start;
      justify-content: center;
    }

    .gatsby-image-wrapper,
    .overlay {
      grid-column: 1;
      grid-row: 1;

      @media ${props => props.theme.breakpoints.desktop} {
        grid-column: 2;
        grid-row: 2;
      }
    }
    .gatsby-image-wrapper {
      height: 100%;
    }

    .info {
      grid-column: 1;
      grid-row: 1;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      z-index: 2;
      width: 100%;
      height: 100%;
      background: rgba(60, 60, 60, 0.7);
      color: ${props => props.theme.grayscale.light1};
      padding: 15px;

      @media ${props => props.theme.breakpoints.desktop} {
        grid-column: 1/-1;
        grid-row: 1 / span 2;
        width: fit-content;
        height: fit-content;
      }
    }
  }

  .commercial {
    .info {
      justify-self: flex-start;
    }
  }
  .residential {
    .info {
      justify-self: flex-end;
    }
  }

  .path,
  .under-path,
  .path-reverse,
  .under-path-reverse {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
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

  .path-reverse {
    background: ${props => props.theme.grayscale.dark4};
    clip-path: polygon(0% 80%, 80% 0%, 100% 0%, 100% 100%, 0% 100%);
  }

  .under-path-reverse {
    background: ${props => props.theme.colors.red};
    clip-path: polygon(0% 70%, 70% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
`
