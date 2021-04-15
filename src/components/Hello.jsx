import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
class Search extends React.Component {

    constructor() {
        super()

        this.state = {

            firstName: '',
            lastName: '',
            fName_Error: '',
            lName_Error: ''
        }
    }

    handleFirstName = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastName = event => {
        this.setState({
            lastName: event.target.value
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Login</h2>
                <div>
                    <br/><br/><label>FirstName</label>&nbsp;&nbsp;
                    <input id='firstName' type='text' value={this.state.firstName} onChange={this.handleFirstName} />

                    <div style={{ color: 'red', fontSize: 12 }}>{this.state.fName_Error}</div>
                    {/* ):null} */}
                </div>&nbsp;
                <div>
                    <label>LastName</label>&nbsp;&nbsp;
                    <input className='lastName' type='text' value={this.state.lastName} onChange={this.handleLastName} />
                    <div style={{ color: 'red', fontSize: 12 }}>{this.state.lName_Error}</div>
                </div><br /><br />
                <Button variant='contained' color='primary'>LOGIN</Button>
            </form>
        )
    }
}
export default Search
