import React from 'react';
import styles from './form'

class Confirmation extends React.Component {
    render(){

        const { values } = this.props;

        return (
            <div className="card">
                <div className="mt-4 ml-3">
                    <div className="text-center" style={styles.h1}>
                        <h1>Confirm your Details</h1>
                        <h6>click confirm  if the following details are correctly entered.</h6>
                    </div>
                    <div className="pt-4" style={styles.text}>
                        <p ><strong>First Name: </strong>{ values.firstName }</p>
                        <p><strong>Last Name: </strong>{ values.lastName }</p>
                        <p><strong>Age: </strong>{ values.age }</p>
                        <p><strong>City: </strong>{ values.city }</p>
                        <p><strong>Country: </strong>{ values.country }</p>
                    </div>
                    <div className="text-center my-4">
                        <button 
                            type="button" 
                            style={styles.customButton}
                            className="btn btn-lg" 
                            onClick = { this.props.nextStep }
                        >
                            Save and continue
                        </button>
                        <button 
                            type="button"
                            style={styles.customButton2}
                            className="btn btn-lg ml-3" 
                            onClick = { this.props.prevStep }
                        >
                            Go back
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Confirmation;