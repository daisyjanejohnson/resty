import React from 'react';
import axios from 'axios';
import md5 from 'md5';

import Header from './components/header/header.js';
import Form from './components/form/form.js';
import History from './components/history/history.js'
import Results from './components/results/results.js';
import HelpPage from './components/helpPage/help-page.js';
import Footer from './components/footer/footer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends React.Component{
 // By calling super(props) you are calling the constructor of React.Component. Super references parent class.
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      headers: null,
      results: [],
      loading: false,
      request: {},
      history:{},
    };
  }

  // LOADING FUNCTION Toggles it to be the opposite of what it curently is
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading});
  }

  // GET THE RESULTS
  updateResults = (headers, results) => {
    this.setState({ headers, results });
  }

  // Get the request
  updateRequest = (request) => {
    this.setState({ request });
  }

updateHistory = (request) => {
  let hash = md5(JSON.stringify(request));

  // new history contains all of the old history
  const history = {...this.state.history, [hash]:request }

  this.setState({ history }, () => {
    // grab the history from the state and stringify and it throw it in there with a key of history
    localStorage.setItem('history', JSON.stringify(this.state.history));
  });
}

  fetchResults = async (request) => {
    try {
      // Start Load
      this.toggleLoading();

      this.updateRequest(request);

      let response = await axios(request);
      //Stop load
      this.toggleLoading();

      this.updateHistory(request);

      this.updateResults(response.headers, response.data);
    }
    catch(e){
      console.log('ERROR', e);
    }
 }
    componentDidMount() {
      let history = JSON.parse(localStorage.getItem('history'));
      this.setState({ history });
    }

 

  // We are returning these results in our desired format, and rendering them to the app.
  render(){
    return(
      <div className="app">
      <BrowserRouter>
      <Header />
      <Switch>
{/* Home Route */}
      <Route exact path='/'>
      <Form prompt="Enter API URL" request={this.state.request} handler={this.fetchResults} />
      <History handler={this.updateRequest} calls={this.state.history}/>
      <Results loading={this.state.loading} count={this.state.count} results={this.state.results} headers={this.state.headers}/>
      </Route>
{/* History Route */}
      <Route exact path='/history'>
      <History handler ={this.updateRequest} calls={this.state.history} results={this.state.results} />
      </Route>
{/* Help Route */}
      <Route exact path='/help'>
      <HelpPage />
      <ol>
    <li>Enter in desired API url into the input box</li>
    <li>Select method</li>
    <li>Click Go!</li>
    <li>Visit history in the history tab!</li>

  </ol>
      </Route>

      </Switch>
      <Footer />
      </BrowserRouter>
      </div>
    )
  }
}


export default App;
