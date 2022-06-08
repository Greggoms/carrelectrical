import styled from "styled-components"

export const FooterContainer = styled.footer`
  background: ${props => props.theme.grayscale.dark4};
  color: ${props => props.theme.grayscale.light1};

  .footer-content {
    padding: 10px 20px;
    a {
      color: ${props => props.theme.colors.linkLight};
    }
  }
`
