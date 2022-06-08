import styled from "styled-components"

export const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;

  label {
    display: flex;
    flex-direction: column;
    gap: 2px;
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
  }
`
