import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Amplify} from 'aws-amplify';

import {withAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);



function App({signOut, user}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={signOut}>Sign Out Again</button>
<h1> Hello from v2 </h1>
</header> 
    </div>
  );
}

export default withAuthenticator(App);
