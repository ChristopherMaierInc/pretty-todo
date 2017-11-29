import React, {Component} from 'react';
import './App.css';
import Header from './components/header'
import {Input} from 'reactbulma'

class App extends Component {

  state = {
    tasks: ['Do the washing', 'Become a JS Weapon'],
    searchPhrase: ''
  }

  onChangeQuery = (event) => {
    this.setState({
      searchPhrase: event.target.value
    })
  }

  addTask = (event) => {
    // stop the browser from submitting the form
    event.preventDefault();
    // make a copy of the current tasks
    const currentTasks = [...this.state.tasks];
    // add the new task to our copy of tasks
    currentTasks.unshift( this.state.searchPhrase );
    // Update the state with the new tasks
    this.setState({
      tasks: currentTasks,
      searchPhrase: ''
    })
  }

  render() {

    const { tasks, searchPhrase } = this.state

    return (<div className="App">
      <Header title="Incomplete" totalIncomplete={ tasks.length }/>
        <div>
          <form onSubmit={ this.addTask }>
            <Input primary large
            placeholder="Search / Add a Todo"
            value={ searchPhrase }
            onChange={ this.onChangeQuery }
            />
          </form>
          {
            tasks
            .filter(myTask => myTask.includes(searchPhrase))
            .map(myTask => <p>{myTask}</p>)
          }
        </div>
      </div>);
  }
}

export default App;
