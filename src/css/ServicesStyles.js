import styled from "styled-components"

export const ServicesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  width: 100%;
  max-width: 1500px;
  margin: 0 auto;

  h2 {
    margin-bottom: 10px;
    text-align: center;
    font-weight: 200;
    font-size: 26pt;
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

    .gatsby-image-wrapper,
    .info,
    .overlay {
      grid-column: 1;
      grid-row: 1;
    }
    .gatsby-image-wrapper {
      height: 100%;
    }

    .info {
      z-index: 2;
      color: ${props => props.theme.grayscale.light1};
      padding: 15px;
    }

    .overlay {
      z-index: 1;
      width: 100%;
      height: 100%;
      background: rgba(60, 60, 60, 0.7);
    }
  }
`
