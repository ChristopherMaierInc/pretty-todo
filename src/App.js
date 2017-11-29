import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import {
  Input,
  Notification,
  Button,
  Title,
  SubTitle,
  Container,
  Content,
  Heading,
  Hero,
  Icon
} from 'reactbulma';
// import 'letteringjs';
import jQuery from 'jquery';

let currentId = 2;
const genId = () => ++currentId;

class App extends Component {

  state = {
    tasks: [
      {
        id: 1,
        name: 'Do the washing',
        date: new Date("July 21, 1983 01:15:00"),
        complete: false
      }, {
        id: 2,
        name: 'Become a JS Weapon',
        date: new Date("July 21, 1983 01:15:00"),
        complete: false
      }
    ],
    searchPhrase: ''
  }

  onChangeQuery = (event) => {
    this.setState({searchPhrase: event.target.value})
  }

  addTask = (event) => {
    // stop the browser from submitting the form
    event.preventDefault();

    // make a copy of the current tasks
    const currentTasks = [...this.state.tasks];
    const existingItem = this.state.tasks.find(task => task.name === this.state.searchPhrase);

    // add the new task to our copy of tasks
    !existingItem && currentTasks.unshift({id: genId(), name: this.state.searchPhrase, date: new Date(), complete: false});

    // Update the state with the new tasks
    this.setState({tasks: currentTasks, searchPhrase: ''})
  }

  changeCompletedStatus = (id) => {
    const currentTasks = [...this.state.tasks];
    const taskIndex = currentTasks.findIndex(task => task.id === id)
    currentTasks[taskIndex].complete = !currentTasks[taskIndex].complete
    this.setState(prevState => ({tasks: currentTasks}))
  }

  render() {

    const {tasks, searchPhrase} = this.state

    return (<div className="App">
      <Hero primary bold>
        <Hero.Body>
          <Container>
            <Title>
              Pretty Tasks™
            </Title>
            <SubTitle is='5'>
              A minimalistic to-do list made with the React JavaScript library.
            </SubTitle>
          </Container>
        </Hero.Body>
      </Hero>
      <Header totalTasks={tasks.length} totalIncomplete={tasks.filter(task => !task.complete).length} totalComplete={tasks.filter(task => task.complete).length}/>
      <Container fluid="fluid">
        <form onSubmit={this.addTask}>
          <Input autoFocus primary medium placeholder="Search or Add a New Task!" value={searchPhrase} onChange={this.onChangeQuery}/><br/><br/>
          <Button primary outlined medium>Submit</Button>
        </form>
        {
          tasks.filter(task => task.name.includes(searchPhrase)).map(task => ([<Notification primary={task.complete} bold onClick={() => this.changeCompletedStatus(task.id)}>
            <SubTitle is='3'>{task.name}</SubTitle>
            <Heading>{task.date.toLocaleString()}</Heading>
          </Notification>
            ]))
        }
      </Container>
    </div>)
  }
}

export default App;
