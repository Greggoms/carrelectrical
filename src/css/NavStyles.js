import styled from "styled-components"

export const NavContainer = styled.nav`
  position: sticky;
  top: 0px;
  z-index: 100;

  background: ${props => props.theme.grayscale.dark4};

  .nav-content {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;

    padding: 15px;
    max-width: 1000px;
    margin: 0 auto;
  }

  a {
    color: #f9f9f9;
  }
`
