import React from 'react';
import styles from './form'

class UserDetail extends React.Component {
    render() {
        const { values } = this.props;
        return (
            <div className="card" style={styles.card}>
                <div className="m-3 text-center">
                    <h1 className="mb-5" style={styles.h1}>Enter User Details</h1>
                    <form>
                        <div className="form-group">
                            <label><h5 style={styles.text}>First Name</h5></label>
                            <input 
                                type="text"
                                style={styles.customInput}
                                name = "firstName"
                                className = "form-control"
                                placeholder="First Name"
                                defaultValue = { values.firstName }
                                onChange = { this.props.handleChange }
                            />
                        </div>
                        <div className="form-group">
                            <label><h5 style={styles.text}>Last Name </h5></label>
                            <input 
                                type="text"
                                style={styles.customInput}
                                name = "lastName"
                                className = "form-control"
                                placeholder="Last Name"
                                defaultValue = { values.lastName } 
                                onChange = { this.props.handleChange  }
                            />
                        </div>
                    </form>
                    <button 
                        type="submit"  
                        style={styles.customButton}
                        className="btn btn-lg mt-4" 
                        onClick = { this.props.nextStep}
                    >
                        save and continue
                    </button>
                </div>
            </div>
        );
    }
}

export default UserDetail;