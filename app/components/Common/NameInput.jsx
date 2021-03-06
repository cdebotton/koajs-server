/** @flow */

var React = require('react');

var NameInput = React.createClass({
  propTypes: {
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    onHandleChange: React.PropTypes.func.isRequired
  },

  getDefaultProps(): Object {
    return {onHandleChange: function() {}};
  },

  handleChange(): void {
    var first: string = this.refs.firstName.getDOMNode().value;
    var last: string = this.refs.lastName.getDOMNode().value;

    this.props.onHandleChange(first, last);
  },

  render(): any {
    return (
      <fieldset className="name-input">
        <input
          type="text"
          ref="firstName"
          placeholder="First name"
          value={this.props.firstName}
          onChange={this.handleChange} />
        <input
          type="text"
          ref="lastName"
          placeholder="Last name"
          value={this.props.lastName}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
});

module.exports = NameInput;
