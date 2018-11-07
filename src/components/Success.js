import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'


const Success = () => (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="User data success" />
                <h1>User data send success</h1>
            </React.Fragment>
        </MuiThemeProvider>
);

export default Success;
