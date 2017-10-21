import React from 'react'
import MaskedInput from 'react-text-mask';


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: "",
            last: "",
            ssn: "",
            error: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>{this.state.first} {this.state.last}</p>
                <p>{this.state.ssn}</p>
                <p>
                    <label htmlFor="ssn">Social Security:</label>
                    {/*<input type="text" value={this.state.value} onChange={this.handleChange} />*/}
                    <MaskedInput
                        mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        className="form-control"
                        placeholder="Enter SSN"
                        guide={false}
                        id="ssn"
                        onChange={this.handleChange}
                        value={this.state.ssn}
                    />
                    <label htmlFor="first">First Name:</label>
                    <input type="text" id="first" value={this.state.first} onChange={this.handleChange}/>
                    <label htmlFor="last">Last Name:</label>
                    <input type="text" id="last" value={this.state.last} onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </p>
            </form>
        );
    }
}

export default NameForm;