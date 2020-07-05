import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
	palette: {
		primary: {
			main: '#823587',
		  },
		action: {
			disabled: '#cbcbcb',
		},
	}
});

theme = responsiveFontSizes(theme);

export default theme;
