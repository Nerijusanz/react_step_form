import React, { Component } from 'react';

import FormUserDetail from './FormUserDetail';
import FormPersonalDetail from './FormPersonalDetail';
import Confirm from './Confirm';
import Success from './Success';


class UserForm extends Component {

    state={
        data:{
            firstName:'',
            lastName:'',
            email:'',
            occupation:'',
            city:'',
            bio:''
        },
        step:1
    }

    nextStep = (e) =>{
        e.preventDefault();

        const {step} = this.state;
        this.setState({
            step:step + 1
        });
    }

    prevStep = (e) =>{
        e.preventDefault();

        const {step} = this.state;
        this.setState({
            step:step - 1
        });
    }

    handleChange = input => e => {
        this.setState({data:{
                        ...this.state.data,
                        [input]:e.target.value
                    }});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state.data);

        const {step} = this.state;
        // AJAX CALL GET SUCCESS
        if(true){
            this.setState({
                step: step + 1,
                data:{
                    firstName:'',
                    lastName:'',
                    email:'',
                    occupation:'',
                    city:'',
                    bio:''
                }
            });
        }


    }


    formStepContent = () => {

        const {step,data} = this.state;



        const formUserDetail =  <FormUserDetail 
                                    nextStep={this.nextStep} 
                                    handleChange={this.handleChange} 
                                    data={data} 
                                />

        const formPersonalDetail =  <FormPersonalDetail
                                        nextStep={this.nextStep}
                                        prevStep={this.prevStep}
                                        handleChange={this.handleChange} 
                                        data={data} 
                                    />

        const confirm =  <Confirm
                            prevStep={this.prevStep}
                            submit={this.handleSubmit}
                            data={data}
                        />

        const success  = <Success />

        
        switch(step){
            case 1:
               return(
                formUserDetail
               )
           case 2:
               return(
                   formPersonalDetail
               )
           case 3:
               return(
                   confirm
               )
            case 4:
               return(
                success
               )
            default:
               return(
                   formUserDetail
               )
       }


    }

  render() {


    const content = this.formStepContent();

    
    return (
      <div>
          {content}
      </div>
    )
  }
}

export default UserForm;