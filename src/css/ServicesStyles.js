import styled from "styled-components"

export const ServicesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

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

  .entergy {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    background: ${props => props.theme.grayscale.dark4};
    color: ${props => props.theme.grayscale.light1};
    padding: 20px;

    .gatsby-image-wrapper {
      width: 100%;
      max-width: 300px;
    }

    span {
      margin: -20px 0 -30px 0;
    }

    p {
      max-width: 500px;
      line-height: 18pt;
    }
  }

  .service {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    justify-items: center;
    align-items: flex-start;

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
