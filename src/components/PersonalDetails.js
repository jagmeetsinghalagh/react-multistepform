import React from 'react';

class PersonalDetails extends React.Component {
    
    render(){

        const { values } = this.props;

        return (
            <div className="card">
                <div className="m-3 text-center">
                    <h1>PersonalDetails</h1>
                    <form>
                        <div className="form-group">
                            <label>Age</label>
                            <input 
                                type="number"
                                name = "age"
                                className = "form-control"
                                placeholder="Age"
                                defaultValue = { values.age } 
                                onChange = { this.props.handleChange  }
                            />
                        </div>
                        <div className="form-group">
                            <label>City:</label>
                            <input 
                                type="text"
                                name = "city"
                                className = "form-control"
                                placeholder="city"
                                defaultValue = { values.city } 
                                onChange = { this.props.handleChange  }
                            />
                        </div>
                        <div className="form-group">
                            <label>Country:</label>
                            <input 
                                type="text"
                                name = "country"
                                className = "form-control"
                                placeholder="Country"
                                defaultValue = { values.country } 
                                onChange = { this.props.handleChange  }
                            />
                        </div>
                    </form>

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

export default PersonalDetails;