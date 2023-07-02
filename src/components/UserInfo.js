import {
  Grid,
  TextField,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";
import * as Yup from 'yup';

const UserInfo = (props) => {
    // Taking formik form property as a props
  const { formik } = props;
  return (
    <Grid container spacing={2} className="user-info-step">
      <Grid item xs={6}>
        <TextField
          name="firstName"
          label="First name"
          variant="outlined"
          type="text"
          fullWidth
          size="small"
          error={Boolean(formik.touched.firstName && formik.errors.firstName)}
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik?.errors?.firstName && formik?.touched?.firstName && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.firstName}</p>
        )}
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="middleName"
          label="Middle name"
          variant="outlined"
          type="text"
          fullWidth
          size="small"
          error={Boolean(formik.touched.middleName && formik.errors.middleName)}
          onChange={formik.handleChange}
          value={formik.values.middleName}
        />
        {formik?.errors?.middleName && formik?.touched?.middleName && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.middleName}</p>
        )}
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="lastName"
          label="last name"
          variant="outlined"
          type="text"
          fullWidth
          size="small"
          error={Boolean(formik.touched.lastName && formik.errors.lastName)}
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik?.errors?.lastName && formik?.touched?.lastName && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.lastName}</p>
        )}
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="mobileNo"
          label="mobile No"
          variant="outlined"
          type="text"
          fullWidth
          size="small"
          error={Boolean(formik.touched.mobileNo && formik.errors.mobileNo)}
          onChange={formik.handleChange}
          value={formik.values.mobileNo}
        />
        {formik?.errors?.mobileNo && formik?.touched?.mobileNo && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.mobileNo}</p>
        )}
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          type="enail"
          fullWidth
          size="small"
          error={Boolean(formik.touched.email && formik.errors.email)}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik?.errors?.email && formik?.touched?.email && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.email}</p>
        )}
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="date"
          label="birthday"
          name="birthDate"
          variant="outlined"
          fullWidth
          size="small"
          error={Boolean(formik.touched.birthDate && formik.errors.birthDate)}
          onChange={formik.handleChange}
          value={formik.values.birthDate}
        />
        {formik?.errors?.birthDate && formik?.touched?.birthDate && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.birthDate}</p>
        )}
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="age"
          label="Age"
          variant="outlined"
          type="string"
          fullWidth
          size="small"
          error={Boolean(formik.touched.age && formik.errors.age)}
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        {formik?.errors?.age && formik?.touched?.age && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.age}</p>
        )}
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="bloodgroup"
          label="Blood Group"
          variant="outlined"
          type="day"
          fullWidth
          size="small"
          error={Boolean(formik.touched.bloodgroup && formik.errors.bloodgroup)}
          onChange={formik.handleChange}
          value={formik.values.bloodgroup}
        />
        {formik?.errors?.bloodgroup && formik?.touched?.bloodgroup && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.bloodgroup}</p>
        )}
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="height"
          label="Height"
          variant="outlined"
          type="day"
          fullWidth
          size="small"
          error={Boolean(formik.touched.height && formik.errors.height)}
          onChange={formik.handleChange}
          value={formik.values.height}
        />
        {formik?.errors?.height && formik?.touched?.height && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.height}</p>
        )}
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="weight"
          label="Weight"
          variant="outlined"
          type="day"
          fullWidth
          size="small"
          error={Boolean(formik.touched.weight && formik.errors.weight)}
          onChange={formik.handleChange}
          value={formik.values.weight}
        />
        {formik?.errors?.weight && formik?.touched?.weight && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.weight}</p>
        )}
      </Grid>
      <Grid item xs={6} className="gender-radio-option">
        <label htmlFor="gender">Gender</label>
        <RadioGroup
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Male"
          />
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Female"
          />
        </RadioGroup>
        {formik?.errors?.gender && formik?.touched?.gender && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.gender}</p>
        )}
      </Grid>
      <Grid item xs={6} className="marital-status-radio-option">
        <label htmlFor="maritalStatus">Marital Status</label>
        <RadioGroup
          name="maritalStatus"
          value={formik.values.maritalStatus}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <FormControlLabel
            value="single"
            control={<Radio />}
            label="Single"
          />
          <FormControlLabel
            value="married"
            control={<Radio />}
            label="Married"
          />
          <FormControlLabel
            value="divorced"
            control={<Radio />}
            label="Divorced"
          />
          <FormControlLabel
            value="widowed"
            control={<Radio />}
            label="Widowed"
          />
        </RadioGroup>
        {formik?.errors?.maritalStatus && formik?.touched?.maritalStatus && (
          <p className="error-msg" style={{ color: "red" }}> {formik?.errors?.maritalStatus}</p>
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
UserInfo.initialValues = {
  firstName: '',
  middleName: '',
  lastName: '',
  mobileNo: '',
  email: '',
  birthDate: '',
  age: '',
  bloodgroup: '',
  height: '',
  weight: '',
  gender: '',
  maritalStatus: ''
};

// Stepper label
UserInfo.label = 'User Information';

// Yup validation based on active step
UserInfo.validationSchema = Yup.object().shape({
  firstName: Yup.string().required('FirstName is a required field'),
  middleName: Yup.string().required('MiddleName is a required field'),
  lastName: Yup.string().required('LastName is a required field'),
  mobileNo: Yup.string().matches(/^[6-9]\d{9}$/, { message: "Please enter valid MobileNo.", excludeEmptyString: false }).required('MobileNo is a required field'),
  email: Yup.string().required('Email is a required field').email('Invalid email'),
  birthDate: Yup.string().required('Birthday is a required field'),
  age: Yup.string().matches(/^[0-9]+$/, 'Value must contain only digits').required('Age is a required field field').max(3),
  bloodgroup: Yup.string().required('BloodGroup is a required field'),
  height: Yup.string().required('Height is a required field'),
  weight: Yup.string().required('Weight is a required field'),
  gender: Yup.string().required('Please Select your Gender'),
  maritalStatus: Yup.string().required('Please Select Marial Status')
})
export default UserInfo;



