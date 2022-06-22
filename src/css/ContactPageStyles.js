import styled from "styled-components"

export const ContactPageContainer = styled.article`
  height: 100%;

  .company-info {
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin: 0 auto 30px;
    max-width: fit-content;

    a {
      width: fit-content;
    }
  }

  .form-container {
    height: 100%;
    background: ${props => props.theme.grayscale.dark3};
    color: white;
    padding: 30px;
    h2 {
      margin-bottom: 3px;
    }
    .form-content {
      margin: 0 auto;
      max-width: 500px;

      h2 {
        margin-bottom: 20px;
      }
    }
  }
`
