import { Pagination } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useGridApiContext, useGridState } from '@mui/x-data-grid';
import PropTypes from 'prop-types';

export const PaginationActions = ({ onPageChange }) => {
  const apiRef = useGridApiContext();

  const [state] = useGridState(apiRef);

  const {
    pagination: { page, pageSize, rowCount }
  } = state;
  const classes = useStyles();

  return (
    <Pagination
      count={Math.ceil(rowCount / pageSize)}
      shape="rounded"
      page={page + 1}
      onChange={onPageChange}
      siblingCount={0}
      boundaryCount={1}
      className={classes.paginationRoot}
    >
      Pagination
    </Pagination>
  );
};

PaginationActions.propTypes = {
  onPageChange: PropTypes.func.isRequired
};

const useStyles = makeStyles({
  paginationRoot: {
    marginLeft: 15,

    '& .MuiButtonBase-root': {
      color: '#605E5C',
      fontWeight: 600,
      borderRadius: 4,
      '&:hover': {
        backgroundColor: '#E1DFDD'
      },
      '&.Mui-selected': {
        color: '#323130',
        backgroundColor: '#E1DFDD'
      }
    }
  }
});
