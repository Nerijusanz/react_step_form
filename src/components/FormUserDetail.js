import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


class FormUserDetail extends Component {


  render() {

    const {data,handleChange,nextStep} = this.props;

    return (
      <div>
        <MuiThemeProvider>
          <React.Fragment>

            <AppBar title="User Details" />

            <TextField 
              hintText="First Name"
              floatingLabelText="First Name"
              onChange={handleChange('firstName')}
              defaultValue={data.firstName}
            />
            <br/>
            <TextField 
              hintText="Lastname Name"
              floatingLabelText="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={data.lastName}
            />
            <br/>
            <TextField 
              hintText="Email"
              floatingLabelText="Email"
              onChange={handleChange('email')}
              defaultValue={data.email}
            />
            <br/>
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

FormUserDetail.propTypes = {
  nextStep: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  data: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string

  }).isRequired,
}

export default FormUserDetail;
