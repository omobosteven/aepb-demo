import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const PreviewInfo = ({ data = {}, onSubmit, onCancel, isSubmitting }) => {
  const classes = useStyles();

  const houseTypes = ['Duplex', 'Bungalow', 'Flat'];
  const houseType = houseTypes[parseInt(data?.houseType, 10) - 1];

  const estimatedBill = (5000 * (parseInt(data?.houseType, 10) || 1)).toLocaleString();

  return (
    <section>
      <Typography component="h5" className={classes.title}>
        Preview Information
      </Typography>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div>
            <p className="label">House type</p>
            <p className="value">{houseType}</p>
          </div>
          <div>
            <p className="label">Number of occupants</p>
            <p className="value">{data.noOfOccupants}</p>
          </div>
          <div>
            <p className="label">Pickup frequency</p>
            <p className="value">{data.pickupFrequency}</p>
          </div>
          <div>
            <p className="label">Estimated bill:</p>
            <p className="bill">₦{estimatedBill}</p>
          </div>
        </div>
      </div>
      <Grid
        className={classes.btnWrapper}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Button
          color="secondary"
          variant="contained"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          onClick={onSubmit(estimatedBill)}
        >
          Submit
        </Button>
      </Grid>
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.light,
    maxWidth: 588,
    borderRadius: 8,
    padding: '24px 40px',

    '& .label': {
      fontSize: 14,
      fontWeight: 400,
      color: theme.palette.text.tertiary,
      marginTop: 0,
      marginBottom: 4
    },

    '& .value': {
      fontSize: 16,
      fontWeight: 500,
      color: theme.palette.text.primary,
      textTransform: 'capitalize',
      marginTop: 0,
      marginBottom: 0
    },

    '& .bill': {
      fontSize: 24,
      fontWeight: 500,
      color: theme.palette.primary.main,
      margin: 0
    }
  },

  content: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    '& div:not(:last-of-type)': {
      marginBottom: 20
    },

    '& div:last-of-type': {
      flex: '1 0 100%'
    }
  },

  title: {
    fontSize: 16,
    fontWeight: 400,
    color: theme.palette.text.primary,
    marginBottom: 16
  },

  btnWrapper: {
    maxWidth: 588,
    marginTop: 40
  }
}));
