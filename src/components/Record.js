import React, { Component } from 'react';

export default class Record extends Component {

  render() {
    return (
      <tr>
        {/* <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{this.props.record.amount}</td> */}
        <td>{this.props.date}</td>
        <td>{this.props.title}</td>
        <td>{this.props.amount}</td>
      </tr>
    )
  }
}