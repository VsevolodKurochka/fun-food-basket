import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form className="uk-form-stacked">
            <div>
                <label className="uk-form-label">Name</label>
                <div className="uk-form-controls"><input type="text" className="uk-input" placeholder="SDF"/></div>
            </div>
            <div>
                <div className="uk-form-label"></div>
                <div className="uk-form-controls">...</div>
            </div>
        </form>
      </div>
    );
  }
}

export default App;
