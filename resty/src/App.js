import React from 'react';
import Header from './components/header/header.js';
import Form from './components/form/form.js';
import Results from './components/results/results.js';
import Footer from './components/footer/footer.js';
// import JSONPretty from 'react-json-pretty';
import './App.css';

class App extends React.Component{
 // By calling super(props) you are calling the constructor of React.Component. Super references parent class.
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      headers: null,
      results: [],
    };
  }

  // Every time a change occurs in our input, we call handleForm to output our data in the desired way.
  handleForm = (headers, count, results) => {
    this.setState({count, results, headers });
  };

  // We are returning these results in our desired format, and rendering them to the app.
  render(){
    return(
      <>
      <Header />
      <Form prompt="Enter API URL"  handler={this.handleForm} />
      <Results count={this.state.count} results={this.state.results} headers={this.state.headers}/>
      <Footer />
      </>
    )
  }
}


export default App;
