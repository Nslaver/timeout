import styled from 'styled-components'
import Home from './Home.jsx'

let HomeStyled = styled(Home)`
  display: block;
  header {
    margin: 0;
    background: ${props => props.theme.colors.steelBlue};
    h1 {
      background: inherit;
    }
  }
  footer {
    background: ${props => props.theme.colors.steelBlue};
    display: flex;
    flex-direction: row;

    .footer-button {
      width: calc(100% / 3);
    }
  }
`

export default HomeStyled
