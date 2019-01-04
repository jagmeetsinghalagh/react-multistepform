import React from 'react';

class Confirmation extends React.Component {
    render(){

        const { values } = this.props;

        return (
            <div className="card">
                <div className="mt-4">
                    <h1 className="text-center">Confirm your Details</h1>
                    <h6 className="text-center">click confirm  if the following details are correctly entered.</h6>
                    <p><strong>First Name: </strong>{ values.firstName }</p>
                    <p><strong>Last Name: </strong>{ values.lastName }</p>
                    <p><strong>Age: </strong>{ values.age }</p>
                    <p><strong>City: </strong>{ values.city }</p>
                    <p><strong>Country: </strong>{ values.country }</p>
                    <button type="button" className="btn btn-primary" onClick = { this.props.nextStep }>
                        Save and continue
                    </button>
                    <button type="button" className="btn btn-warning" onClick = { this.props.prevStep }>
                        Go back
                    </button>
                </div>
            </div>
        );
    }
}

export default Confirmation;