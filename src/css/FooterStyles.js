import styled from "styled-components"

export const FooterContainer = styled.footer`
  background: ${props => props.theme.grayscale.dark4};
  color: ${props => props.theme.grayscale.light1};

  .footer-content {
    display: flex;
    justify-content: space-between;

    padding: 10px 20px;
    max-width: 1000px;
    margin: 0 auto;

    span {
      font-size: 9pt;
      color: ${props => props.theme.grayscale.light2};
    }

    svg {
      height: 100%;
      max-height: 35px;
      padding-right: 20px;
    }
    a {
      color: ${props => props.theme.colors.linkLight};
    }
  }
`
