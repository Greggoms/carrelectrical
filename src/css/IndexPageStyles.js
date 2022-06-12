import styled from "styled-components"

export const IndexPageContainer = styled.div`
  .entergy {
    grid-column: 1/-1;

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
      margin: -10px 0 -30px 0;
    }

    p {
      max-width: 500px;
      line-height: 18pt;
    }
  }

  .lower-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 50px;

    button {
      background: ${props => props.theme.colors.linkDark};
      color: ${props => props.theme.grayscale.light1};
      font-size: 18pt;
    }
  }
`
