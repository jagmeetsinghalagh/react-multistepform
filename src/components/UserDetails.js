import React from 'react';

class UserDetail extends React.Component {
    render() {
        const { values } = this.props;

        return (
            <div className="card">
                <div className="m-3 text-center">
                    <h1>Enter User Details</h1>
                    <form>
                        <div className="form-group">
                            <label>First Name:</label>
                            <input 
                                type="text"
                                name = "firstName"
                                className = "form-control"
                                placeholder="First Name"
                                defaultValue = { values.firstName }
                                onChange = { this.props.handleChange }
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input 
                                type="text"
                                name = "lastName"
                                className = "form-control"
                                placeholder="Last Name"
                                defaultValue = { values.lastName } 
                                onChange = { this.props.handleChange  }
                            />
                        </div>
                    </form>
                    <button type="submit" className="btn btn-primary" onClick = { this.props.nextStep}>
                        save and continue
                    </button>
                </div>
            </div>
        );
    }
}

export default UserDetail;