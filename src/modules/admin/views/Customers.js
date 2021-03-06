import { makeStyles } from '@mui/styles';
import { Table, TableChip, Container, AdminHeader } from 'reusables';
import { datatype, name, helpers } from 'faker';
import { useMemo } from 'react';
import { useTableParams } from 'hooks';
import { useHistory } from 'react-router-dom';

const columns = [
  {
    headerName: 'Name',
    field: 'name',
    disableColumnMenu: true,
    minWidth: 60,
    flex: 1
  },
  {
    headerName: 'House Type',
    field: 'houseType',
    sortable: false,
    minWidth: 60,
    flex: 1,
    valueOptions: ['bungalow', 'duplex', 'flat']
  },
  {
    headerName: 'Status',
    field: 'status',
    sortable: false,
    renderCell: ({ value }) => {
      const chipMapping = {
        verified: 'success',
        unverified: 'info'
      };
      return <TableChip text={value} color={chipMapping[value?.toLowerCase()]} />;
    },
    minWidth: 60,
    valueOptions: ['verified', 'unverified']
  }
];

const Customers = () => {
  const [tableParams, setTableParams] = useTableParams();
  const history = useHistory();
  const classes = useStyles();

  return (
    <section className={classes.sectionRoot}>
      <AdminHeader title="Customers" />

      <Container isAdmin>
        <div className={classes.tableContainer}>
          <Table
            title="Payment History"
            rows={customersData}
            columns={columns}
            setTableParams={setTableParams}
            tableParams={tableParams}
            onRowClick={useMemo(
              () =>
                ({ id }) =>
                  history.push(`/admin/customers/${id}`),
              [history]
            )}
          />
        </div>
      </Container>
    </section>
  );
};

const useStyles = makeStyles(() => ({
  sectionRoot: {},

  tableContainer: {
    overflowX: 'auto'
  }
}));

const customersData = Array.from(Array(10)).map(() => {
  return {
    id: datatype.uuid(),
    name: `${name.firstName()} ${name.lastName()}`,
    houseType: helpers.randomize(['Bungalow', 'Duplex', 'Flat']),
    status: helpers.randomize(['Verified', 'Unverified'])
  };
});

export default Customers;
