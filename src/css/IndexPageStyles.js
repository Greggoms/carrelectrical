import styled from "styled-components"

export const IndexPageContainer = styled.div`
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
