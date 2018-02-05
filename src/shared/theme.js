import { injectGlobal } from 'styled-components'

const Theme = {
  main: 'mediumseagreen',
  colors: {
    dazzledBlue: '#2f6690',
    steelBlue: '#3a7ca5',
    prussianBlue: '#0d2c54',
    gainsboro: '#d9dcd6',
    darkskyblue: '#81c3d7'
  }
}

injectGlobal`
body {
  font-family: 'Lato', sans-serif;
  margin: 0;
  font-size: 14px;
  background: ${Theme.colors.prussianBlue};
  color: ${Theme.colors.gainsboro};
}
`

export default Theme
