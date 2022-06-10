import styled from "styled-components"

export const HeaderContainer = styled.header`
  background: #333;
  color: #f9f9f9;

  .header-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    justify-items: center;

    padding: 15px;
    max-width: 1500px;
    margin: 0 auto;
    @media ${props => props.theme.breakpoints.tablet} {
      flex-direction: row;
    }
  }

  h1 {
    margin: 0;
  }
  a {
    color: #f9f9f9;
  }
`
