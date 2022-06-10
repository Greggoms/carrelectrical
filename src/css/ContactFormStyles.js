import styled from "styled-components"

export const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;

  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  label {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  input,
  textarea {
    width: 100%;
    padding: 5px 2px;
  }

  textarea {
    min-height: 125px;
  }

  span {
    font-size: 10pt;
  }

  .request-quote-btn {
    width: fit-content;
    padding: 10px;

    font-size: large;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }
`
