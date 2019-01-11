import React from 'react';
import styles from './form'

class PersonalDetails extends React.Component {
    
    render(){

        const { values } = this.props;

        return (
            <div className="card" style={styles.card}>
                <div className="m-3 text-center">
                    <h1 className="mb-3" style={styles.h1}>PersonalDetails</h1>
                    <form>
                        <div className="form-group">
                            <label><h5 style={styles.text}>Age </h5></label>
                            <input 
                                type="number"
                                style={styles.customInput}
                                name = "age"
                                className = "form-control"
                                placeholder="Age"
                                defaultValue = { values.age } 
                                onChange = { this.props.handleChange  }
                            />
                        </div>
                        <div className="form-group">
                            <label><h5 style={styles.text}>City </h5></label>
                            <input 
                                type="text"
                                style={styles.customInput}
                                name = "city"
                                className = "form-control"
                                placeholder="city"
                                defaultValue = { values.city } 
                                onChange = { this.props.handleChange  }
                            />
                        </div>
                        <div className="form-group">
                            <label><h5 style={styles.text}>Country </h5></label>
                            <input 
                                type="text"
                                style={styles.customInput}
                                name = "country"
                                className = "form-control"
                                placeholder="Country"
                                defaultValue = { values.country } 
                                onChange = { this.props.handleChange  }
                            />
                        </div>
                    </form>

                    <button 
                        type="button" 
                        style={styles.customButton} 
                        className="btn btn-lg mt-4" 
                        onClick = { this.props.nextStep }
                    >
                        Save and continue
                    </button>
                    <button
                        type="button" 
                        style={styles.customButton2} 
                        className="btn btn-lg mt-4 ml-3" 
                        onClick = { this.props.prevStep }
                    >
                        Go back
                    </button>
                </div>
                        
            </div>
        );
    }
}

export default PersonalDetails;