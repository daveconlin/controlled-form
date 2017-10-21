import React from "react";
import MaskedInput from "react-text-mask";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      ssn: "",
      error: null,
      scrubFirst: "Victor",
      scrubLast: "Aponte",
      scrubSSN: "090-444-2245"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      scrubFirst: this.state.first,
      scrubLast: this.state.last,
      scrubSSN: this.state.ssn
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <hr />
        <p>
          {this.state.scrubFirst} {this.state.scrubLast}
        </p>
        <p>{this.state.scrubSSN}</p>
        <hr />
        <p>
          <label htmlFor="ssn">Social Security:</label>
          {/*<input type="text" value={this.state.value} onChange={this.handleChange} />*/}
          <MaskedInput
            mask={[
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
              /\d/,
              /\d/
            ]}
            className="form-control"
            placeholder="Enter SSN"
            guide={false}
            id="ssn"
            onChange={this.handleChange}
            value={this.state.ssn}
          />
        </p>
        <p>
          {" "}
          <label htmlFor="first">First Name:</label>
          <input
            type="text"
            id="first"
            placeholder="Enter First Name"
            value={this.state.first}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="last">Last Name:</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            id="last"
            value={this.state.last}
            onChange={this.handleChange}
          />
        </p>
        <hr />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
