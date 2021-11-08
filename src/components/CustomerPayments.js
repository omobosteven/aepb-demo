import { Button, Grid, styled, SvgIcon } from '@mui/material';
import { format } from 'date-fns';
import { makeStyles } from '@mui/styles';
import { Table, TableChip } from 'reusables';
import { ReactComponent as DisableView } from 'assets/view-disabled.svg';
import { ReactComponent as View } from 'assets/view.svg';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { paymentServices } from 'services/paymentServices';
import { toast } from 'react-hot-toast';
import { useTableParams } from 'hooks';
import { ProfileCard } from './ProfileCard';

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
    valueFormatter: ({ value }) => format(new Date(value), 'dd MMM, yyyy')
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
    renderCell: ({ row: { status } }) => {
      return (
        <ActionButton
          disabled={['failed', 'pending'].includes(status?.toLowerCase())}
          // onClick={() => console.log(id)}
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

export const CustomerPayments = () => {
  const classes = useStyles();
  const [tableData, setTableData] = useState([]);
  const [tableParams, setTableParams] = useTableParams();

  const { isLoading, isFetching } = useQuery(
    ['payments', tableParams],
    paymentServices.getPayments,
    {
      onSuccess: ({ data, meta }) => {
        const flattenData = data.map(({ id, attributes }) => ({
          id,
          ...attributes
        }));

        setTableData(flattenData);
        setTableParams((prevState) => ({
          ...prevState,
          ...meta.pagination
        }));
      },
      onError: (error) => {
        toast.error(error.message);
      }
    }
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ProfileCard />
      </Grid>
      <Grid item xs={12} className={classes.tableContainer}>
        <Table
          loading={isLoading || isFetching}
          title="Payment History"
          rows={tableData}
          columns={columns}
          setTableParams={setTableParams}
          tableParams={tableParams}
        />
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles({
  tableContainer: {
    overflowX: 'auto'
  }
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
