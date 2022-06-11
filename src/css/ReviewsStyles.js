import styled from "styled-components"

const ReviewsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 50px 0;

  /* For the snap scrolling */
  overflow-x: hidden;

  .reviews-heading {
    border-left: 10px solid ${props => props.theme.colors.red};
    padding-left: 10px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80vw, 1fr));
    grid-template-rows: min-content;
    gap: 20px;

    /* https://codepen.io/chriscoyier/pen/pMRgwW */
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;

    list-style-type: none;
    background: ${props => props.theme.grayscale.dark4};
    padding: 10px;

    @media ${props => props.theme.breakpoints.tablet} {
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    }
  }

  li {
    /* Keep all grid children on the same row
    to imitate a flex-direction: row; layout */
    grid-row: 1;
    /* more scroll snap stuff */
    scroll-snap-align: center;
    overflow-y: hidden;
    min-width: 300px;
    height: min-content;

    display: flex;
    flex-direction: column;
    gap: 30px;

    background: ${props => props.theme.grayscale.light2};
    padding: 10px;
    line-height: 16pt;
  }
`

export default ReviewsContainer