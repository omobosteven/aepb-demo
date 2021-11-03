import { useState, useEffect } from 'react';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  capitalize,
  Divider,
  Button,
  styled,
  SvgIcon
} from '@mui/material';
import {
  useGridApiContext,
  useGridState,
  GridColumnMenuContainer
} from '@mui/x-data-grid';
import { ReactComponent as CheckBoxBorder } from 'assets/tableIcons/checkBoxBorder.svg';
import { ReactComponent as CheckBoxFill } from 'assets/tableIcons/checkBoxFill.svg';
import { SearchInput } from '../SearchInput';

export const FilterMenu = ({ ...rest }) => {
  const [checked, setChecked] = useState([]);
  const [searchText, setSearchText] = useState('');
  const apiRef = useGridApiContext();
  const [state] = useGridState(apiRef);

  const {
    currentColumn: { valueOptions, field },
    hideMenu
  } = rest;

  const {
    filter: { filterModel }
  } = state;

  useEffect(() => {
    const filterValue =
      filterModel.items.find((model) => model.columnField === field)?.value || '';
    setSearchText(filterValue);
  }, [field, filterModel.items]);

  const handleFilter = (event) => {
    apiRef.current.setFilterModel({
      items: [
        {
          columnField: field,
          value: searchText
        }
      ]
    });
    hideMenu(event);
  };

  const handleChange = (event) => {
    if (event.target.checked) {
      setChecked((prevChecked) => [...prevChecked, event.target.name]);
    } else {
      setChecked((prevChecked) => {
        return prevChecked.filter((check) => check !== event.target.name);
      });
    }
  };

  const handleChangeCheckAll = (event) => {
    if (event.target.checked) {
      setChecked([...valueOptions]);
    } else {
      setChecked([]);
    }
  };

  const handleClearAll = (event) => {
    const activeFilterModel = filterModel.items.filter(
      (item) => item.columnField !== field
    );
    apiRef.current.setFilterModel({
      items: activeFilterModel
    });

    setChecked([]);
    setSearchText('');
    hideMenu(event);
  };

  return (
    <StyledFilterMenu>
      <SearchInput
        value={searchText}
        onChange={setSearchText}
        className="tableSearchInput"
      />
      <FormGroup
        className="checkboxGroup"
        sx={{ display: valueOptions ? 'flex' : 'none' }}
      >
        {valueOptions ? (
          <>
            <FormControlLabel
              label="Check all"
              control={
                <Checkbox
                  checked={checked.length === valueOptions.length}
                  onChange={handleChangeCheckAll}
                  icon={<SvgIcon component={CheckBoxBorder} viewBox="0 0 20 20" />}
                  checkedIcon={<SvgIcon component={CheckBoxFill} viewBox="0 0 20 20" />}
                />
              }
            />
            <Divider />
            <div className="filterItems">
              {valueOptions.map((option) => (
                <FormControlLabel
                  key={option}
                  control={
                    <Checkbox
                      checked={!!checked.find((check) => check === option)}
                      onChange={handleChange}
                      name={option}
                      icon={<SvgIcon component={CheckBoxBorder} viewBox="0 0 20 20" />}
                      checkedIcon={
                        <SvgIcon component={CheckBoxFill} viewBox="0 0 20 20" />
                      }
                    />
                  }
                  label={capitalize(option)}
                />
              ))}
            </div>
          </>
        ) : null}
      </FormGroup>

      <div className="btnGroup">
        <Button variant="contained" color="primary" onClick={handleFilter}>
          Apply
        </Button>
        <Button variant="contained" color="secondary" onClick={handleClearAll}>
          Clear All
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

  '& .checkboxGroup': {
    marginBottom: 12,

    '& .filterItems': {
      maxHeight: 162,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column'
    },

    '& .MuiDivider-root': {
      borderColor: '#EDEBE9',
      marginTop: 6,
      marginBottom: 6
    },

    '& .MuiCheckbox-root': {
      padding: '6px 4px 6px 0',

      '& .MuiSvgIcon-root': {
        fill: 'transparent',
        fontSize: 18
      }
    },

    '& .MuiFormControlLabel-root': {
      marginLeft: 0
    },

    '& .MuiFormControlLabel-label': {
      color: '#201F1E',
      fontSize: 14,
      fontWeight: 400
    }
  },

  '& .btnGroup': {
    display: 'flex',
    alignItems: 'flex-start',

    '& .MuiButton-root': {
      fontSize: 14,

      '&:first-of-type': {
        marginRight: 16
      }
    }
  }
});
