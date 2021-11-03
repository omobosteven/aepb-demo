import React from 'react';
import { makeStyles } from '@mui/styles';
import { SvgIcon } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import { ReactComponent as TableMenuIcon } from 'assets/tableIcons/table-menu-icon.svg';
import { ReactComponent as SortAsc } from 'assets/tableIcons/sort-asc-icon.svg';
import { ReactComponent as SortDesc } from 'assets/tableIcons/sort-desc-icon.svg';
import { dequal } from 'dequal';
import { PaginationActions } from './PaginationActions';
import { FilterMenu } from './FilterMenu';
import { QuickSearchBar } from './QuickSearchBar';

const MenuIcon = () => <SvgIcon component={TableMenuIcon} viewBox="0 0 12 8" />;
const SortDescIcon = () => <SvgIcon component={SortDesc} viewBox="0 0 7 12" />;
const SortAscIcon = () => <SvgIcon component={SortAsc} viewBox="0 0 7 12" />;

// Table height calculation
// height at 10 rows display = 584px
// 1 row = 43px
// e.g to display 15 rows => 584 + (43 * (15 - 10)) = 799px

export const Table = React.memo(
  ({
    tableParams,
    title,
    columns,
    rows,
    setTableParams,
    pageSizeOptions,
    tableHeight,
    ...rest
  }) => {
    const classes = useStyles({ tableHeight });
    const { pageSize, pageNumber, total } = tableParams;

    const handleSort = (model) => {
      const sortMapping = {
        asc: '+',
        desc: '-'
      };

      const sortModel = model.length ? model[0] : null;
      const sortParam = sortModel
        ? `${sortMapping[sortModel.sort]}${sortModel.field}`
        : '';

      setTableParams((prevParams) => ({
        ...prevParams,
        sort: sortParam
      }));
    };

    const handleFilter = (model) => {
      if (model.items.length) {
        const item = model.items[0];
        setTableParams((prevParams) => ({
          ...prevParams,
          searchBy: item.columnField,
          search: item.value
        }));
      } else {
        setTableParams((prevParams) => ({
          ...prevParams,
          searchBy: '',
          search: ''
        }));
      }
    };

    const handlePageChange = (page) => {
      setTableParams((prevParams) => ({
        ...prevParams,
        pageNumber: page
      }));
    };

    return (
      <div className={classes.tableWrapper}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ flexGrow: 1, height: '100%' }}>
            <DataGrid
              columns={columns}
              rows={rows}
              disableSelectionOnClick
              disableColumnResize
              filterMode="server"
              paginationMode="server"
              sortingMode="server"
              rowHeight={43}
              headerHeight={43}
              getRowClassName={() => classes.tableRow}
              classes={{ root: classes.gridRoot }}
              page={pageNumber - 1}
              pageSize={pageSize}
              rowCount={total}
              rowsPerPageOptions={pageSizeOptions}
              hideFooterPagination={!total}
              components={{
                Toolbar: QuickSearchBar,
                ColumnMenuIcon: MenuIcon,
                ColumnUnsortedIcon: SortAscIcon,
                ColumnSortedDescendingIcon: SortDescIcon,
                ColumnSortedAscendingIcon: SortAscIcon,
                ColumnMenu: FilterMenu
              }}
              componentsProps={{
                toolbar: {
                  setTableParams,
                  title
                },
                pagination: {
                  page: pageNumber - 1,
                  onPageChange: (event, page) => handlePageChange(page),
                  rowsPerPage: pageSize,
                  rowsPerPageOptions: pageSizeOptions.map((option) => ({
                    value: option,
                    label: `${option} items`
                  })),
                  onRowsPerPageChange: (event) =>
                    setTableParams((prevParams) => ({
                      ...prevParams,
                      pageSize: event.target.value,
                      pageNumber: 1
                    })),
                  labelDisplayedRows: ({ from, to, count: totalCount }) =>
                    `Showing ${from} to ${to} of ${totalCount}`,
                  labelRowsPerPage: '',
                  ActionsComponent: PaginationActions,
                  classes: { root: classes.tablePagination }
                }
              }}
              onSortModelChange={handleSort}
              onFilterModelChange={handleFilter}
              {...rest}
            />
          </div>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return dequal(prevProps, nextProps);
  }
);

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTableParams: PropTypes.func.isRequired,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
  tableHeight: PropTypes.number
};

Table.defaultProps = {
  pageSizeOptions: [10, 20, 30],
  tableHeight: 584
};

const useStyles = makeStyles((theme) => ({
  tableWrapper: {
    minWidth: 850,
    width: '100%',
    height: ({ tableHeight }) => tableHeight,
    borderRadius: 8
  },

  gridRoot: {
    borderRadius: 8,
    border: 0,
    background: theme.palette.common.white,

    '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within, &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus,  &.MuiDataGrid-root .MuiDataGrid-cell:focus-within':
      {
        outline: 'none'
      },

    '& .MuiDataGrid-overlay': {
      zIndex: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.48)'
    },

    '& .MuiDataGrid-colCell:focus': {
      outline: 'none'
    },

    '& .MuiDataGrid-columnsContainer': {
      borderBottom: '1px solid #EDEBE9',
      background: theme.palette.primary.light
    },

    '& .MuiDataGrid-columnHeader': {
      '&:first-of-type': {
        paddingLeft: 16
      },

      '& .MuiDataGrid-columnSeparator': {
        display: 'none'
      },

      '& .MuiDataGrid-columnHeaderTitleContainer': {
        flex: 'unset',
        padding: 0
      },

      '& .MuiDataGrid-columnHeaderTitleContainer .MuiDataGrid-columnHeaderTitle': {
        fontSize: 14,
        fontWeight: 600
      },

      '& .MuiDataGrid-iconButtonContainer': {
        width: 'auto',
        visibility: 'visible',

        '& .MuiSvgIcon-root': {
          marginTop: 2,
          fontSize: 12,
          fill: '#605E5C'
        }
      },

      '&.MuiDataGrid-columnHeader--sorted .MuiDataGrid-iconButtonContainer': {
        '& .MuiSvgIcon-root': {
          fill: theme.palette.primary.main
        }
      },

      '& .MuiDataGrid-menuIcon': {
        width: 'auto',
        visibility: 'visible',
        marginRight: 0,

        '& .MuiSvgIcon-root': {
          marginTop: 2,
          fontSize: 12,
          fill: '#605E5C'
        },

        '&.MuiDataGrid-menuOpen': {
          '& .MuiSvgIcon-root': {
            fill: theme.palette.primary.main
          }
        }
      },

      '&[data-field="status"].MuiDataGrid-columnHeader--alignRight .MuiDataGrid-columnHeaderDraggableContainer':
        {
          flexDirection: 'row',
          justifyContent: 'flex-end'
        },

      '& .MuiDataGrid-columnHeaderTitle': {
        marginRight: 10
      }
    },

    '& .MuiDataGrid-footerContainer': {
      minHeight: 43
    }
  },

  tableRow: {
    cursor: 'pointer',

    '& .MuiDataGrid-cell': {
      borderBottom: '1px solid #EDEBE9',
      textTransform: 'capitalize',
      fontWeight: 400,
      fontSize: 14,
      // border: '1px solid red',

      '&:first-of-type': {
        paddingLeft: 16
      }
    },

    '&.MuiDataGrid-row:hover': {
      backgroundColor: '#EFF6FC'
    }
  },

  tablePagination: {
    width: '100%',

    '& .MuiTablePagination-toolbar': {
      minHeight: 43,
      paddingLeft: 12,
      paddingRight: 10,

      '& .MuiTablePagination-input.MuiSelect-root': {
        fontWeight: 600,
        marginRight: 0,

        '& .MuiTablePagination-select': {
          color: '#605E5C'
        }
      },

      '& .MuiTablePagination-spacer': {
        flex: 0
      },

      '& .MuiTablePagination-displayedRows': {
        order: -1,
        color: '#605E5C',
        marginRight: 'auto'
      }
    }
  }
}));
