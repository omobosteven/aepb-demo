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
import { TextField, RadioButton, ControlSelectInput as SelectInput } from 'reusables';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const RegistrationForm = ({ onSubmit, defaultValues, ...rest }) => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema)
  });

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...rest}>
      <Grid className={classes.root} container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            errors={errors}
            register={register}
            name="firstName"
            label="First name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            errors={errors}
            register={register}
            name="lastName"
            label="Last name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            errors={errors}
            register={register}
            name="phoneNumber"
            label="Phone number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            errors={errors}
            register={register}
            name="email"
            label="Email address"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            errors={errors}
            register={register}
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
            options={numberOfOccupantsOptions}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SelectInput
            name="pickupFrequency"
            label="Pickup frequency"
            errors={errors}
            control={control}
            options={pickupFrequencyOptions}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField errors={errors} register={register} name="address" label="Address" />
        </Grid>

        <Grid item xs={12} md={6}>
          <SelectInput
            name="lga"
            label="Area"
            errors={errors}
            control={control}
            options={LGAs}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            disabled
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
  defaultValues: PropTypes.objectOf(PropTypes.any)
};

RegistrationForm.defaultProps = {
  defaultValues: {}
};

const useStyles = makeStyles((theme) => ({
  root: {
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

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('last Name is required'),
  phoneNumber: Yup.string()
    .required('Phone is required')
    .matches(/^[0]\d{10}$/, 'Enter a valid phone number 070...'),
  email: Yup.string().required('Email is required').email('Enter a valid Email'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password length is less than 8 characters'),
  houseType: Yup.string().required('Select a house type'),
  noOfOccupants: Yup.string().required('Select number of occupants'),
  pickupFrequency: Yup.string().required('Select pickup frequency'),
  address: Yup.string().required('Enter your address'),
  lga: Yup.string().required('Select your LGA.')
});

const LGAs = [
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
  { label: '1-3', value: '1-3' },
  { label: '3-5', value: '3-1' },
  { label: '5-7', value: '5-7' },
  { label: '7-10', value: '7-10' }
];

const pickupFrequencyOptions = [
  { label: 'Daily', value: 'daily' },
  { label: 'Biweekly', value: 'biweekly' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Fortnightly', value: 'fortnightly' },
  { label: 'Monthly', value: 'monthly' }
];
