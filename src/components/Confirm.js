import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List,ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

class Confirm extends Component {
  render() {

    const {data,prevStep,submit} = this.props;

    return (
      <div>
        <MuiThemeProvider>
          <React.Fragment>

            <AppBar title="User details" />
            <List>
                <ListItem primaryText="First name" secondaryText={data.firstName} />
                <ListItem primaryText="Last name" secondaryText={data.lastName} />
                <ListItem primaryText="Email" secondaryText={data.email} />
                <ListItem primaryText="Occupation" secondaryText={data.occupation} />
                <ListItem primaryText="City" secondaryText={data.city} />
                <ListItem primaryText="Bio" secondaryText={data.bio} />
            </List>

            <RaisedButton
              label="back"
              primary={false}
              style={styles.button}
              onClick={prevStep}
            />

            <RaisedButton
              label="send"
              primary={true}
              style={styles.button}
              onClick={submit}
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

Confirm.propTypes={
    data: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        occupation: PropTypes.string,
        city: PropTypes.string,
        bio: PropTypes.string,
    }).isRequired,
    prevStep: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
}

export default Confirm;
