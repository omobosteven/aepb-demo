import { useState, useEffect } from 'react';
import { Button, styled } from '@mui/material';
import {
  useGridApiContext,
  useGridState,
  GridColumnMenuContainer
} from '@mui/x-data-grid';
import { SearchInput } from '../SearchInput';

export const FilterMenu = ({ ...rest }) => {
  const [filterText, setFilterText] = useState('');
  const apiRef = useGridApiContext();
  const [state] = useGridState(apiRef);

  const {
    currentColumn: { field },
    hideMenu
  } = rest;

  const {
    filter: { filterModel }
  } = state;

  useEffect(() => {
    const filterValue =
      filterModel.items.find((model) => model.columnField === field)?.value || '';
    setFilterText(filterValue);
  }, [field, filterModel.items]);

  const handleFilter = (event) => {
    if (filterText) {
      apiRef.current.setFilterModel({
        items: [
          {
            columnField: field,
            value: filterText
          }
        ]
      });
    } else {
      apiRef.current.setFilterModel({
        items: []
      });
    }
    hideMenu(event);
  };

  const handleClearFilter = (event) => {
    setFilterText('');
    apiRef.current.setFilterModel({
      items: []
    });
    hideMenu(event);
  };

  return (
    <StyledFilterMenu>
      <SearchInput
        value={filterText}
        onChange={setFilterText}
        className="tableSearchInput"
      />

      <div className="btnGroup">
        <Button variant="contained" color="primary" onClick={handleFilter}>
          Apply
        </Button>
        <Button variant="contained" color="secondary" onClick={handleClearFilter}>
          Clear
        </Button>
      </div>
    </StyledFilterMenu>
  );
};

const StyledFilterMenu = styled(GridColumnMenuContainer)({
  maxWidth: 242,
  padding: 16,
  boxShadow: '0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
  borderRadius: 2,

  '& .tableSearchInput': {
    marginBottom: 16,
    background: '#F3F2F1'
  },

  '& .btnGroup': {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    '& .MuiButton-root': {
      fontSize: 14,
      width: '45%',
      paddingTop: 4,
      paddingBottom: 4
    }
  }
});
