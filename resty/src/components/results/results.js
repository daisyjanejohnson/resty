import React from 'react';
import JSONPretty from 'react-json-pretty';
import './results.scss'

function Results(props) {
  return(
    <div className="results">
      <h3 data-testid="count">Count: {props.count}</h3>
      <>Headers: <JSONPretty data={props.headers}/></>
      <div data-testid="count">Results: <JSONPretty data={props.results}/></div> 
    </div>
  )
}

export default Results;