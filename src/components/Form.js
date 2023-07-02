import { useState } from 'react';
import { useFormik } from 'formik';
import '../styles/steps.scss';

import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormHelperText,
  Button
} from '@mui/material';
import UserInfo from './UserInfo';
import AddressDetail from './AddressDetail';
import ThankYouStep from './ThankYouStep';

// 3 steps array
const steps = [UserInfo, AddressDetail, ThankYouStep];

const Form = () => {
  // active step state
  const [activeStep, setActiveStep] = useState(0);

  // Using Formik for data & error handling
  const formik = useFormik({
    initialValues: steps[activeStep].initialValues,
    validationSchema: steps[activeStep].validationSchema,
    onSubmit: () => {
      if (activeStep !== steps.length - 1) {
        setActiveStep((prevStep) => prevStep + 1);
      }
    }
  });

  // Back btn click event
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  // Next btn click event
  const handleNext = () => {
    if (!formik.errors) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  }

  // according to active step we will show form content.
  const formContent = (step) => {
    switch (step) {
      case 0:
        return <UserInfo formik={formik} />;
      case 1:
        return <AddressDetail formik={formik} />;
      case 2:
        return <ThankYouStep formik={formik} />;
      default:
        return <div>404: Not Found</div>
    }
  };

  return (
    <Box className="user-info-stepper-wrapper">
      <Stepper alternativeLabel className='horizontal-stepper'
        activeStep={activeStep}
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form onSubmit={formik.handleSubmit}>
        <Grid container>
          <Grid className='user-form-wrapper' item xs={12}>
            {formContent(activeStep)}
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
          <Grid
            item
            xs={2}
            className='submit-btn-wrapper'
          >
            {activeStep !== steps.length - 1 &&
              (
                <>
                  <Button className='back-btn' color="primary" variant="contained"
                    disabled={activeStep === 0} onClick={handleBack}>
                    Back
                  </Button>
                  <Button color="primary"
                    variant="contained" type="submit" onClick={handleNext}>
                    Next
                  </Button>
                </>
              )}
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default Form;