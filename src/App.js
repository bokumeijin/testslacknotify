import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NotifySend from './component/NotifySend';
// Require module:
 

class App extends Component {

  getRemark = (e) =>{

    /// please change webhook url
    var MY_SLACK_WEBHOOK_URL = 'https://myaccountname.slack.com/services/hooks/incoming-webhook?token=myToken';
    var slack = require('slack-notify')(MY_SLACK_WEBHOOK_URL);
   
    e.preventDefault();
    const Remark = e.target.elements.remark.value;
    console.log(Remark);
// Callbacks and a generic onError function are supported:
 
slack.alert('Hello world '+ Remark , function (err) {
  if (err) {
    console.log('API error:', err);
  } else {
    console.log('Message received!');
  }
});
 
slack.onError = function (err) {
  console.log('API error:', err);
};

slack.alert({
  text: Remark,
  text: 'Current server stats',
  fields: {
    'CPU usage': '7.51%',
    'Memory usage': '254mb'
  }
});
}



  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <NotifySend getRemark={this.getRemark}/> 
  
      </div>
    );
  }
}

export default App;
