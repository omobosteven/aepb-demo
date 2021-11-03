import { Avatar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const TableCellWithMore = ({ valueList }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>{valueList[0]}</Typography>
      {valueList.length > 1 && <Avatar>+{valueList.length - 1}</Avatar>}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',

    '& .MuiTypography-body1': {
      fontSize: 'inherit',
      fontWeight: 'inherit',
      marginRight: 4
    },

    '& .MuiAvatar-root': {
      fontSize: 10,
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.grey.light,
      width: 'fit-content',
      height: 'fit-content',
      padding: '3px 2px'
    }
  }
}));
