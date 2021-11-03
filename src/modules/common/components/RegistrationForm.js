/* eslint-disable */
import PropTypes from 'prop-types';
import {
  Grid,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Button,
  FormHelperText
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useForm, Controller } from 'react-hook-form';
import { TextField, RadioButton, SelectInput } from 'reusables';

export const RegistrationForm = ({ onSubmit, defaultValues, ...rest }) => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit
  } = useForm({
    defaultValues
  });

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...rest}>
      <Grid className={classes.root} container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            errors={errors}
            register={register}
            rules={validator.firstName}
            name="firstName"
            label="First name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            errors={errors}
            register={register}
            rules={validator.lastName}
            name="lastName"
            label="Last name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            errors={errors}
            register={register}
            rules={validator.phone}
            name="phoneNumber"
            label="Phone number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            errors={errors}
            register={register}
            rules={validator.email}
            name="email"
            label="Email address"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            errors={errors}
            register={register}
            rules={validator.password}
            type="password"
            name="password"
            label="Password"
          />
        </Grid>

        <Grid item xs={12}>
          <FormLabel className={classes.radioGroupLabel}>House type</FormLabel>
          <Controller
            name="houseType"
            control={control}
            rules={validator.houseType}
            render={({ field }) => (
              <RadioGroup row className={classes.radioGroup} {...field}>
                <FormControlLabel value="1" label="Bungalow" control={<RadioButton />} />
                <FormControlLabel value="2" label="Duplex" control={<RadioButton />} />
                <FormControlLabel value="3" label="Flat" control={<RadioButton />} />
              </RadioGroup>
            )}
          />
          {errors.houseType ? (
            <FormHelperText className={classes.errorMessage}>
              Select a house type
            </FormHelperText>
          ) : null}
        </Grid>

        <Grid item xs={12} md={6}>
          <SelectInput
            name="noOfOccupants"
            label="Number of occupants"
            errors={errors}
            control={control}
            rules={validator.noOfOccupants}
            options={numberOfOccupantsOptions}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SelectInput
            name="pickupFrequency"
            label="Pickup frequency"
            rules={validator.pickupFrequency}
            errors={errors}
            control={control}
            options={pickupFrequencyOptions}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            errors={errors}
            register={register}
            rules={validator.address}
            name="address"
            label="Address"
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <SelectInput
            name="lga"
            label="Area"
            errors={errors}
            control={control}
            rules={validator.lga}
            options={LGAs}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            disabled={true}
            errors={errors}
            register={register}
            name="state"
            label=""
            defaultValue="FCT"
          />
        </Grid>

        <div className={classes.submitButton}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!!Object.values(errors).length}
          >
            Continue
          </Button>
        </div>
      </Grid>
    </form>
  );
};

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object
};

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',

    '& .MuiGrid-item': {
      paddingTop: 0
    }
  },

  submitButton: {
    width: '100%',
    textAlign: 'right',
    marginTop: 24
  },

  radioGroupLabel: {
    display: 'block',
    color: theme.palette.text.tertiary,
    fontSize: 14,
    fontWeight: 400,
    marginBottom: 8,
    marginTop: 16
  },

  radioGroup: {
    '& .MuiFormControlLabel-label': {
      fontSize: 16
    }
  },

  errorMessage: {
    marginTop: 2
  }
}));

const validator = {
  buildingType: {
    required: 'Select a building type.'
  },
  firstName: {
    required: 'First name a required.',
    maxLength: {
      value: 20,
      message: 'The maximum length is 20.'
    },
    minLength: {
      value: 2,
      message: 'The minimum length is 2.'
    }
  },
  lastName: {
    required: 'Last name a required.',
    maxLength: {
      value: 20,
      message: 'The maximum length is 20.'
    },
    minLength: {
      value: 2,
      message: 'The minimum length is 2.'
    }
  },
  phone: {
    required: 'Enter your phone number.',
    pattern: {
      value: /^[0]\d{10}$/,
      message: 'Invalid phone number.'
    }
  },
  email: {
    required: 'Enter your email address.',
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Enter a valid email address.'
    }
  },
  password: {
    required: 'Enter a password.',
    minLength: {
      value: 3,
      message: 'Password should be more than 3 characters.'
    }
  },
  ownershipType: {
    required: 'Select an ownership type.'
  },
  houseType: {
    required: 'Select a house type.'
  },
  noOfOccupants: {
    required: 'Select number of occupants.'
  },
  pickupFrequency: {
    required: 'Select pickup frequency'
  },
  address: {
    required: 'Enter your address.',
    minLength: {
      value: 3,
      message: 'Address is too short.'
    }
  },
  lga: {
    required: 'Select your LGA.'
  }
};

const LGAs = [
  {
    label: ''
  },
  {
    label: 'Abaji',
    value: 'abaji'
  },
  {
    label: 'Municipal',
    value: 'minicipal'
  },
  {
    label: 'Gwagwalada',
    value: 'gwagwalada'
  },
  {
    label: 'Kuje',
    value: 'kuje'
  }
];

const numberOfOccupantsOptions = [
  { label: '' },
  { label: '1-3', value: '1-3' },
  { label: '3-5', value: '3-1' },
  { label: '5-7', value: '5-7' },
  { label: '7-10', value: '7-10' }
];

const pickupFrequencyOptions = [
  { label: '' },
  { label: 'Daily', value: 'daily' },
  { label: 'Biweekly', value: 'biweekly' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Fortnightly', value: 'fortnightly' },
  { label: 'Monthly', value: 'monthly' }
];
