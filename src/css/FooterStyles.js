import styled from "styled-components"

export const FooterContainer = styled.footer`
  background: ${props => props.theme.grayscale.dark4};
  color: ${props => props.theme.grayscale.light1};

  .footer-content {
    padding: 10px 20px;
    max-width: 1000px;
    margin: 0 auto;
    a {
      color: ${props => props.theme.colors.linkLight};
    }
  }
`
