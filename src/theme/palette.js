const PRIMARY = {
  light: '#E1E3FA',
  main: '#3A4192',
  dark: '#111C55'
};
const SECONDARY = {
  light: '#F0F5FF',
  main: '#94D7F7',
  dark: '#0D1733'
};
const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '',
  darker: ''
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '',
  darker: ''
};
const WARNING = {
  lighter: '#FFF5EA',
  light: '#E0B878',
  main: '#B98900',
  dark: '',
  darker: ''
};
const ERROR = {
  lighter: '#FEEFEF',
  light: '#F48989',
  main: '#DA1414',
  dark: '',
  darker: ''
};

const GREY = {
  disabled: '#E7E7ED',
  light: '#F3F2F1',
  dashedBorder: '#EDEBE9'
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY
};

const palette = {
  ...COMMON,
  text: {
    primary: '#3F415B',
    secondary: '#393A4A',
    disabled: '#A7A9BC',
    tertiary: '#6B6C7E',
    title: '#6B6D7E',
    pageTitle: '#1E0A3C'
  },
  border: {
    secondary: '#ADB0CC',
    primary: '#CDCED9',
    tertiary: '#EDEDED'
  },
  background: {
    paper: '#fff',
    default: '#fff',
    neutral: GREY.disabled,
    primary: '#083A55',
    secondary: '#E5E5E5',
    lighter: '#DEECF9'
  }
};

export default palette;
