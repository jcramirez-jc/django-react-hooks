import { render } from "react-dom";
import React from "react";
import Header from "./Header";
import Tasks from "./Tasks";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        todolist: [],
        activeItem:{
          id:null,
          title:'',
          day:'',
          completed:false,
        },
        showAddTask: false,

    };
    this.handleShowAddTask = this.handleShowAddTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDay = this.handleDay.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }


  handleShowAddTask(){
    this.setState({
        showAddTask: !this.state.showAddTask,
    });
  }

  componentDidMount() {
    fetch("api/tasks")
      .then(response => response.json())
      .then(data =>
        this.setState({
            todolist: data
        })

        )
  }



  addTask(){
        const requestOptions ={
            method: "POST",
            body: JSON.stringify(this.state.activeItem),
            headers: {"Content-Type": "application/json"},
        };
        fetch("api/tasks/", requestOptions)
        .then(response => response.json())
        .then(task => this.setState({
            activeItem:{
              id:null,
              title:'',
              completed:false,
              }
        }));
    }

    handleInput(e){
        this.setState({
            activeItem:{
                ...this.state.activeItem,
                title: e.target.value
            }
        })
    }

    handleDay(e){
        this.setState({
            activeItem:{
                ...this.state.activeItem,
                day: e.target.value
            }
        })
    }

    handleCompleted(e){
        this.setState({
            activeItem:{
                ...this.state.activeItem,
                completed: e.currentTarget.checked
            }
        })
    }

    deleteTask(task){

          fetch('api/tasks/')
            .then(response => response.json())
            .then(data =>
              this.setState({ todolist:data })
              )
  }


  render() {
    var tasks = this.state.todolist
    var setTasks = this.state.todolist


    return (
        <div className="container">


          <Header onAdd={() => this.handleShowAddTask()} showAdd={this.state.showAddTask} />

          <Tasks tasks={tasks} setTasks={setTasks}  onDelete={this.deleteTask}/>


          {this.state.showAddTask &&
              <form className="add-form" onSubmit={this.addTask}>
                <div className="form-control">
                    <label>Task</label>
                    <input type="text" placeholder='Add task' value={this.state.activeItem.title} onChange={this.handleInput}/>
                </div>
                <div className="form-control">
                    <label>Day and time</label>
                    <input type="text" placeholder='Add day and time' value={this.state.activeItem.day} onChange={this.handleDay}/>
                </div>

                <div className="form-control form-control-check">
                    <label>Reminder?</label>
                    <input type="checkbox" value={this.state.activeItem.completed} onChange={this.handleCompleted} />
                </div>

                <input type="submit" value="save task" className="btn btn-block" />
            </form>
          }
        </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);