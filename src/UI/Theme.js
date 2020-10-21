import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';

const mainTheme = createMuiTheme({
    palette: {
        primary: {
            light: blueGrey[500],
            main: blueGrey[800],
            dark:blueGrey[900],
            contrastText: '#fff',
        },
        secondary: {
            light: green['A100'],
            main: green['A200'],
            dark:  green['A700'],
            contrastText: '#fff',
        },
    //     backgroundImage: {
    //     default: "#222222",
    //   }
    },
        shape: {
    borderRadius: 0,
  }, 
  typography:{
      fontFamily:"Roboto",
      fontSize:16,
      body2:{
          fontFamily:"Oswald",
        fontSize: 16,
      }
  },
overrides:{
    MuiButton:{
        root:{

        }
    }
}
});
export default mainTheme;