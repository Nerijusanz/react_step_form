import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


class FormPersonalDetail extends Component {


  render() {

    const {data,handleChange,prevStep,nextStep} = this.props;

    return (
      <div>

        <MuiThemeProvider>

          <React.Fragment>

            <AppBar title="User Details" />

            <TextField 
              hintText="Occupation"
              floatingLabelText="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={data.occupation}
            />
            <br/>
            <TextField 
              hintText="City"
              floatingLabelText="City"
              onChange={handleChange('city')}
              defaultValue={data.city}
            />
            <br/>
            <TextField 
              hintText="Bio"
              floatingLabelText="Bio"
              onChange={handleChange('bio')}
              defaultValue={data.bio}
            />
            <br/>
            <RaisedButton
              label="back"
              primary={false}
              style={styles.button}
              onClick={prevStep}
            />

            <RaisedButton
              label="continue"
              primary={true}
              style={styles.button}
              onClick={nextStep}
            />

          </React.Fragment>

        </MuiThemeProvider>

      </div>
    )
  }
}

const styles = {
  button:{
    margin:15
  }
}

FormPersonalDetail.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  data: PropTypes.shape({
    occupation: PropTypes.string,
    city: PropTypes.string,
    bio: PropTypes.string

  }).isRequired,
}

export default FormPersonalDetail;
