import React from 'react';
import ReactJson from 'react-json-view'
import { If, Then, Else, When } from '../if/if';
import './results.scss'
import loading from '../../images/loading.gif';




const Results = (props) => {
  return (
    <section className="results">

      {/* Ternary saying if we are loading than show the gif otherwise show the results */}

      {

        props.loading ? (
          <div className="loading">
            <img src={loading} alt="Loading" />
          </div>
        ) : (
          <div className="resultsDisplay">
          <h2>Headers </h2>
          <ReactJson src={props.headers} />
          <h2>Results</h2>
          <ReactJson src={props.results} />
          </div>
          )
      }
    </section >

)}

export default Results;