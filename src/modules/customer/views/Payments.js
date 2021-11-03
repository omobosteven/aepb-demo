import { useState } from 'react';
import { Grid, SvgIcon, Button, styled } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ProfileCard, Container, Table, TableChip } from 'reusables';
import { datatype, date, helpers, finance } from 'faker';
import { format } from 'date-fns';
import { ReactComponent as View } from 'assets/view.svg';
import { ReactComponent as DisableView } from 'assets/view-disabled.svg';

const ViewIcon = ({ component, ...rest }) => (
  <SvgIcon component={component} viewBox="0 0 16 10" {...rest} />
);

const columns = [
  {
    headerName: 'Payment date',
    field: 'paymentDate',
    flex: 1,
    minWidth: 60,
    disableColumnMenu: true,
    valueFormatter: ({ value }) => format(value, 'dd MMM, yyyy')
  },
  {
    headerName: 'Amount',
    field: 'amount',
    flex: 1,
    minWidth: 60,
    disableColumnMenu: true
  },
  {
    headerName: 'Status',
    field: 'status',
    flex: 0.5,
    minWidth: 60,
    sortable: false,
    renderCell: ({ value }) => {
      const chipMapping = {
        pending: 'info',
        successful: 'success',
        failed: 'error'
      };
      return <TableChip text={value} color={chipMapping[value?.toLowerCase()]} />;
    },
    valueOptions: ['pending', 'successful', 'failed']
  },
  {
    field: 'actions',
    type: 'actions',
    flex: 0.7,
    minWidth: 60,
    disableColumnMenu: true,
    renderCell: ({ id, row: { status } }) => {
      return (
        <ActionButton
          disabled={['failed', 'pending'].includes(status?.toLowerCase())}
          onClick={() => console.log(id)}
          type="button"
          startIcon={
            <ViewIcon
              component={
                ['failed', 'pending'].includes(status?.toLowerCase()) ? DisableView : View
              }
            />
          }
        >
          View receipt
        </ActionButton>
      );
    }
  }
];

const Payments = () => {
  const classes = useStyles();
  const [tableParams, setTableParams] = useState({
    search: '',
    sort: '',
    pageSize: 10,
    pageNumber: 1,
    total: 20
  });

  return (
    <section className={classes.customerSection}>
      <Container>
        <Grid container spacing={3}>
          <Grid item>
            <ProfileCard vertical />
          </Grid>
          <Grid item xs>
            <Table
              title="Payment History"
              rows={paymentData}
              columns={columns}
              setTableParams={setTableParams}
              tableParams={tableParams}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

const useStyles = makeStyles({
  customerSection: {}
});

export default Payments;

const paymentData = Array.from(Array(10)).map(() => {
  return {
    id: datatype.uuid(),
    amount: finance.amount(5000, 5000),
    paymentDate: date.past(),
    status: helpers.randomize(['Successful', 'Pending', 'Failed'])
  };
});

const ActionButton = styled(Button)({
  fontSize: 14,
  display: 'flex',
  textTransform: 'none',

  '&:hover, &:focus': {
    backgroundColor: 'transparent'
  },

  '& .MuiSvgIcon-root': {
    fontSize: 16,
    height: 'auto',
    marginTop: 2
  }
});
