import clsx from 'clsx';
import { Radio, SvgIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactComponent as RadioIcon } from 'assets/radio.svg';
import { ReactComponent as CheckedRadioIcon } from 'assets/radio-checked.svg';

export const RadioButton = ({ value, disabled, className, ...rest }) => {
  const classes = useStyles();
  return (
    <Radio
      className={clsx([classes.root, className])}
      color="default"
      icon={<SvgIcon component={RadioIcon} viewBox="0 0 16 16" />}
      checkedIcon={<SvgIcon component={CheckedRadioIcon} viewBox="0 0 16 16" />}
      value={value}
      disabled={disabled}
      disableRipple
      {...rest}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.border.secondary,
    marginTop: 2,
    paddingTop: 0,
    paddingBottom: 0,

    '&.MuiButtonBase-root:hover': {
      backgroundColor: 'transparent'
    },

    '& svg': {
      color: 'transparent',
      fontSize: 16
    }
  }
}));
