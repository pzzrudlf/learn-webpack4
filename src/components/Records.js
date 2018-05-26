import React, { Component } from 'react';
import Record from './Record';
import $ from 'jquery';

export default class Records extends Component {
  constructor() {
    super();
    this.state = {
      records: []
    }
  }
  componentDidMount(){
    // $.getJSON("https://5b08c66892b3b4001425a192.mockapi.io/api/v1/records").then(response=>{
      $.getJSON("http://localhost:3005/records").then(response=>{
      this.setState({
        records:response
      })
    },error=>{

    }).catch();
  }
  render() {
    return (
      <div>
        <h2>Records</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* { this.state.records.map((record)=><Record key={record.id} record={record} />) } */}
            { this.state.records.map((record)=><Record key={record.id} {...record} />) }
          </tbody>
        </table>
      </div>
    )
  }
}