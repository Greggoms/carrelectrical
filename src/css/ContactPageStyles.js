import styled from "styled-components"

export const ContactPageContainer = styled.article`
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
    background: ${props => props.theme.grayscale.dark3};
    color: white;
    padding: 30px;
    h2 {
      margin-bottom: 3px;
    }
    .form-content {
      margin: 0 auto;
      max-width: 500px;
    }
  }
`
export const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;

  width: 100%;
  max-width: 800px;
  /* margin: 0 auto 50px; */

  label {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  input,
  textarea {
    width: 100%;
    padding: 5px 2px;
    border: none;
  }

  input {
    border-bottom: 2px solid ${props => props.theme.grayscale.light4};
  }

  input[name="name"] {
    width: 100%;
    max-width: 200px;
  }
  input[name="email"] {
    width: 100%;
    max-width: 300px;
  }
  textarea {
    min-height: 125px;
    border: 2px solid ${props => props.theme.grayscale.light4};
  }

  span {
    font-size: 10pt;
  }

  .form-error {
    color: ${props => props.theme.colors.yellow};
  }

  .request-quote-btn {
    border: none;
    background: ${props => props.theme.colors.linkDark};
    color: ${props => props.theme.grayscale.light1};
    width: fit-content;
    padding: 10px;

    font-size: large;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }
`
