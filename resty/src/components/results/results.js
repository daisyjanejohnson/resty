import React from 'react';
import JSONPretty from 'react-json-pretty';
import './results.scss'

function Results(props) {
  return(
    <div className="results">
      <h2>Count: {props.count}</h2>
      {/* <h4>Header: <JSONPretty data={props.headers}/></h4> */}
     <p>Results:</p>
      <ul>
        {props.results.map(result => {
          return (
            <li>
              <JSONPretty data={result}/>
              
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Results;