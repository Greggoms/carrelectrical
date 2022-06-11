import styled from "styled-components"

export const TeamPageContainer = styled.section`
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 200px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
    gap: 20px;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    p {
      max-width: 500px;
    }
  }

  .member-image {
    justify-self: center;
    align-self: center;
    text-align: center;
  }
`
