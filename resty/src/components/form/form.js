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

  // Asynchronous Fetching of Data
  handleSubmit = async event => {
    event.preventDefault();
    console.log('URL SUBMITTED: ', this.state.url);

// Fetch: Go to this URL and GET from it
    let raw = await fetch(this.state.url);
    let data = await raw.json();
// Cool, got the data!

// Keep track of count
    let count = data.count;

//Format the results
    let apiResults = data.result;

    this.props.handler(count, apiResults);
  };


 

  render() {
    return(
      <form className="App-form" onSubmit={this.handleSubmit}>
        <input type="text" id="urlText" onChange={this.handleChange}/>
        <button>{this.props.prompt}</button>
        <input className="button" type="button" value="GET" onClick={() => this.setState({method: "GET",})}/>
        <input className="button" type="button" value="POST" onClick={() => this.setState({method: "POST",})}/>
        <input className="button" type="button" value="PUT" onClick={() => this.setState({method: "PUT",})}/>
        <input className="button" type="button" value="DELETE" onClick={() => this.setState({method: "DELETE",})}/>
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