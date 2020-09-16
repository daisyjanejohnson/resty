// FOOTER COMPONENT
import React from 'react';
import './form.scss';

class Form extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'GET',
    }
  }

  handleChange = event => {
    event.preventDefault();
    let userInput = event.target.value;
    this.setState({url: userInput});
  }

  // Make the onClick method more DRY
  handleClick = event => {
    let method = event.target.value;
    this.setState({ method });
  }
  // Asynchronous Fetching of Data
  handleSubmit = async event => {
    event.preventDefault();
    console.log('URL SUBMITTED: ', this.state.url);

// Fetch: Go to this URL and GET from it
    let raw = await fetch(this.state.url);
    let data = await raw.json();
    console.log('data', data);
// Cool, got the data!

  //grab the content-type headers
  let headers = await raw.headers.get('content-type');
// Keep track of count
    let count = data.count;

//Format the results
    let results = data.results;

    this.props.handler(headers, count, results);
  };

  // CLEAN UP FORM
  render() {
    return(
      <form className="App-form" onSubmit={this.handleSubmit}>
        <input type="text" id="urlText" onChange={this.handleChange}/>
        <button>{this.props.prompt}</button>
        <input className="button" type="button" value="GET" onClick={this.handleClick}/>
        <input className="button" type="button" value="POST" onClick={this.handleClick}/>
        <input className="button" type="button" value="PUT" onClick={this.handleClick}/>
        <input className="button" type="button" value="DELETE" onClick={this.handleClick}/>
      </form>
    )
  //     {/* DISPLAY API REQUEST */}
  //     <section id="apiRequestDisplay">
  //       <p>{this.state.method} {this.state.url}</p>
  //     </section>

  //   </div>
  //   )
  }
}

export default Form;