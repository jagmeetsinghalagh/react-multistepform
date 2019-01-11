import React from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';

class MainForm extends React.Component {
    state = {
        step : 1,
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        city: '',
        country: ''
    }
    
    // function to go to next page
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // function to go to previous page
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    renderBody = () => {
       const { step,firstName,lastName,email,age,city,country } = this.state;   
       const values = { step,firstName,lastName,email,age,city,country };

        switch(step) {
            case 1: 
                return <UserDetails 
                        nextStep = { this.nextStep }
                        handleChange = { this.handleChange }
                        values = {values}
                        />
            case 2: 
                return <PersonalDetails 
                        prevStep = { this.prevStep }
                        nextStep = { this.nextStep }
                        handleChange = { this.handleChange }
                        values = {values}
                        />
            case 3: 
                return <Confirmation 
                        prevStep = { this.prevStep }
                        nextStep = { this.nextStep }
                        values = {values}
                        /> 
            case 4: return <Success />
            default: return;
        }
    }
    
    render(){
        return (
            <div className="container pt-5 w-50">
                { this.renderBody() }
            </div>
        );
    }
}

export default MainForm;