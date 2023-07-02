import {
  TextField,
  Grid,
  MenuItem, FormControl, InputLabel, Select, FormHelperText
} from '@mui/material';
import * as Yup from 'yup';

// City ,State and Country selection data
const cities = [
  { value: 'ahmedabad', label: 'Ahmedabad' },
  { value: 'losangeles', label: 'Los Angeles' },
  { value: 'chicago', label: 'Chicago' },
  { value: 'houston', label: 'Houston' },
  { value: 'miami', label: 'Miami' }
];

const states = [
  { value: 'assam', label: 'Assam' },
  { value: 'bihar', label: 'Bihar' },
  { value: 'chhattisgarh', label: 'Chhattisgarh' },
  { value: 'gujarat', label: 'Gujarat' },
  { value: 'goa', label: 'Goa' }
];

const countries = [
  { value: 'australia', label: 'Australia' },
  { value: 'belgium', label: 'Belgium' },
  { value: 'canada', label: 'Canada' },
  { value: 'denmark', label: 'Denmark' },
  { value: 'india', label: 'India' }
];

const AddressDetail = (props) => {
  // Taking formik form property as a props
  const { formik } = props;
  return (
    <Grid container spacing={2} className='address-info-step'>
      <Grid
        item
        xs={6}
      >
        <TextField
          name="addressLine1"
          label="Address Line1"
          variant="outlined"
          type="text"
          fullWidth
          size="small"
          error={Boolean(formik.errors.addressLine1)}
          onChange={formik.handleChange}
          value={formik.values.addressLine1}
        />
        {formik?.errors?.addressLine1 && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.addressLine1}</p>
        )}
      </Grid>
      <Grid
        item
        xs={6}
      >
        <TextField
          name="addressLine2"
          label="Address Line2"
          variant="outlined"
          size="small"
          type="text"
          fullWidth
          error={Boolean(formik.errors.addressLine2)}
          onChange={formik.handleChange}
          value={formik.values.addressLine2}
        />
        {formik?.errors?.addressLine2 && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.addressLine2}</p>
        )}
      </Grid>
      <Grid
        item
        xs={6}
      >
        <FormControl className='select-box-wrapper'>
          <InputLabel id="city_label">City</InputLabel>
          <Select
            defaultValue=""
            labelId="city_label"
            id="city"
            label="City"
            name="city"
            error={Boolean(formik.errors.city)}
            value={formik.values.city}
            onChange={formik.handleChange}
          >
            {cities.map((city) => (
              <MenuItem key={city.value} value={city.value}>
                {city.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {formik?.errors?.city && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.city}</p>
        )}
      </Grid>
      <Grid
        item
        xs={6}
      >
        <FormControl className='select-box-wrapper'>
          <InputLabel id="state_label">State</InputLabel>
          <Select
            defaultValue=""
            labelId="state_label"
            id="state"
            label="State"
            name="state"
            error={Boolean(formik.errors.state)}
            value={formik.values.state}
            onChange={formik.handleChange}
          >
            {states.map((state) => (
              <MenuItem key={state.value} value={state.value}>
                {state.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {formik?.errors?.state && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.state}</p>
        )}
      </Grid>
      <Grid
        item
        xs={6}
      >
        <FormControl className='select-box-wrapper'>
          <InputLabel id="country_label">Country</InputLabel>
          <Select 
            defaultValue=""
            labelId="country_label"
            id="country"
            label="Country"
            name="country"
            error={Boolean(formik.errors.country)}
            value={formik.values.country}
            onChange={formik.handleChange}
          >
            {countries.map((country) => (
              <MenuItem key={country.value} value={country.value}>
                {country.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {formik?.errors?.country && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.country}</p>
        )}
      </Grid>
      <Grid
        item
        xs={6}
      >
        <TextField
          name="pincode"
          label="Pincode"
          variant="outlined"
          size="small"
          fullWidth
          value={formik.values.pincode}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.pincode)}
        />
        {formik?.errors?.pincode && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.pincode}</p>
        )}
      </Grid>
      {formik.errors.submit && (
        <Grid
          item
          xs={12}
        >
          <FormHelperText error>
            {formik.errors.submit}
          </FormHelperText>
        </Grid>
      )}
    </Grid>
  )
}

// Initalial values
AddressDetail.initialValues = {
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
  pincode: ''
};

// Stepper label
AddressDetail.label = 'Address Details';

// Yup validation based on active step
AddressDetail.validationSchema = Yup.object().shape({
  addressLine1: Yup.string()
    .required('AddressLine1 is a required field'),
  addressLine2: Yup.string()
    .required('AddressLine2 is a required field'),
  city: Yup.string()
    .required('City is a required field'),
  state: Yup.string()
    .required('State is a required field'),
  country: Yup.string()
    .required('Country is a required field'),
  pincode: Yup.string().matches(/^[0-9]+$/, 'Value must contain only digits')
    .required('Pincode is a required field').max(6)
})

export default AddressDetail;