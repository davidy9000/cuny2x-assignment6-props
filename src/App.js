import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'


class ContactCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name, 
            mobileNumber: props.mobileNumber,
            workNumber: props.workNumber,
            email: props.email
        }   
    }

    render() {
        return <div className = "ContactCard">
            <div>Name: {this.props.name}</div>
            <div>Mobile Phone Number: {this.props.mobileNumber}</div>
            <div>Work Phone Number: {this.props.workNumber}</div>
            <div>Email: {this.props.email}</div>
        </div>
    }
};

ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    mobileNumber: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired
};

class Decrementer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.number
        }
        // bind cuz its at runtime
        // this.decrementNumber = this.decrementNumber.bind(this)
        // this.incrementNumber = this.incrementNumber.bind(this)
    };
    
    //  arrow function handles binding
    decrementNumber = () => {
        if(this.state.number - 1 >= 0){
            this.setState(
                {number: this.state.number -1}
            );
            if(this.state.number-1 === 0){
                alert("Cannot be less than zero");
            }
        }
    }

    incrementNumber = () =>{
        this.setState(
            {number: this.state.number +1}
        );
    }

    render() {
        return <div className = "Decrementer">
            {/* use this.state instead of props cuz state is what is modified, props is what comes in */}
            <div>Value: {this.state.number}</div>
            <button onClick={this.incrementNumber}>Increment</button>
            <button onClick={this.decrementNumber}>Decrement</button>
        </div>
    }
};

Decrementer.propTypes = {
    number: PropTypes.number.isRequired
};

function App() {
    return (
        <div>
            <div className="Contacts">
                <div><ContactCard name="Bob Chen" mobileNumber={1234567890} workNumber={2345678901} email="bob@bob.com"/></div>
                <div><ContactCard name="John Doe" mobileNumber={3942349802} workNumber={4372049723} email="john.doe@aye.com"/></div>
                <div><ContactCard name="Jane Lee" mobileNumber={1573085130} email="doe.jane9@ree.com"/></div>
            </div>
            <br/>
            <div className="Decrements">
                <div><Decrementer number={10}/></div>
            </div>

        </div>
    );
}

export default App;
