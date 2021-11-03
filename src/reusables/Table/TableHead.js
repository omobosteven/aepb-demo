/* eslint-disable no-unused-vars */
import {
  TableCell,
  TableHead as MuiTableHead,
  TableRow,
  TableSortLabel,
  SvgIcon
} from '@mui/material';
import PropTypes from 'prop-types';
import { SortOrder } from './constants';

export const TableHead = ({ columns, order, orderBy, onSort }) => {
  const handleSort = (property) => {
    return (event) => {
      onSort(event, property);
    };
  };

  return (
    <MuiTableHead>
      <TableRow>
        {columns.map((column, index) => {
          const { dataIndex, title, sorter, width } = column;

          return (
            <TableCell
              key={dataIndex || index}
              align="left"
              style={{ width }}
              // sortDirection={sorter && orderBy === dataIndex ? order : false}>
            >
              <TableSortLabel
                {...(sorter && orderBy === dataIndex && { 'aria-label': dataIndex })}
                active={sorter && orderBy === dataIndex && !!order}
                hideSortIcon={!sorter}
                // IconComponent={SortIcon}
                // classes={{
                //   root: clsx(classes.sortLabelRoot, {
                //     [classes.sortAscLabel]: sorter && order === 'asc',
                //   }),
                // }}
                {...(order && {
                  direction: sorter && orderBy === dataIndex ? order : SortOrder.ASC
                })}
                onClick={handleSort(dataIndex)}
              >
                {title}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </MuiTableHead>
  );
};

TableHead.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      dataIndex: PropTypes.string,
      render: PropTypes.func
    })
  ).isRequired,
  order: PropTypes.oneOf(Object.values(SortOrder)),
  orderBy: PropTypes.string,
  onSort: PropTypes.func.isRequired
};

TableHead.defaultProps = {
  order: SortOrder.DEF,
  orderBy: null
};
