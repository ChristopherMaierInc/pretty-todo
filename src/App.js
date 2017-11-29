import React, {Component} from 'react';
import './App.css';
import Header from './components/header'
import {Input, Notification, Button} from 'reactbulma'

class App extends Component {

  state = {
    tasks: [
      { name: 'Do the washing', date: new Date("July 21, 1983 01:15:00") },
      { name: 'Become a JS Weapon', date: new Date("July 21, 1983 01:15:00") }
    ],
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
    const existingItem = this.state.tasks.find(task => task.name === this.state.searchPhrase);

    // add the new task to our copy of tasks
    !existingItem && currentTasks.unshift({name: this.state.searchPhrase, date: new Date()});

    // Update the state with the new tasks
    this.setState({
      tasks: currentTasks,
      searchPhrase: ''
    })
  }

  render() {

    const { tasks, searchPhrase } = this.state

    return (
      <div className="App">
        <Header title="INCOMPLETE" totalIncomplete={ tasks.length }/>
        <form onSubmit={ this.addTask }>
          <Input primary placeholder="Search/Add to do!" value={ searchPhrase } onChange={ this.onChangeQuery }/><br /><br />
          <Button primary>Submit</Button>
        </form>
        {
          tasks
          .filter(task => task.name.includes(searchPhrase))
          .map(task => ([
            <Notification>
              <p>{task.name} - {task.date.toLocaleString()}</p>
            </Notification>]))
        }
      </div>
    );
  }
}

export default App;
