import {
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

const ThankYouStep = ({ formik }) => {
  const { values } = formik;
  return (
    <>
      <Typography variant="overline" className='data-success-title'>
        Data added successfully
      </Typography>
      <List className='user-information-table'>
        <ListItem className='user-info'>
          <ListItemText className='user-info-text'
            primary="Name"
            secondary="Value"
          />
        </ListItem>
        {
          Object.keys(values).map(function (key) {
            return (
              <ListItem className='user-info'>
                <ListItemText className='user-info-text'
                  primary={key}
                  secondary={values[key]}
                />

              </ListItem>
            )
          })
        }
      </List>
    </>
  )
}


ThankYouStep.label = 'Thank You';
export default ThankYouStep