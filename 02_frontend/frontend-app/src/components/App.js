import React, {useEffect} from "react";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask";
import {Routes, Route, useNavigate} from 'react-router-dom';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            fixable: false

        };

        fetch('http://localhost:8080/tasks')
            .then(response => response.json())
            .then((response) => {
                this.setState({tasks: response});
            });
    }



    render() {

        function deleteTask(id) {
            //got Failed to fetch
            // fetch('http://localhost:8080/tasks/'+id, {method: 'Delete'})
            //     .then(() => this.setState({status: 'Delete successful'})

            fetch('http://localhost:8080/tasks/'+id, {method: 'Delete'})
                .then((response=> console.log(response))

            //works in frountend;
            // fetch('http://localhost:8080/tasks')
            //     .then(response => response.json())
            //     .then((tasks) => {const newTasksList = tasks.filter((task) => task.id !== id)
            //         .then((response => response.json()));
            //     }


                    //console.log(newTasksList)
                )
        }

        function markTask(id, isDone) {
            if (isDone === false) {
                //console.log("this isDone")
                fetch('http://localhost:8080/tasks/' + id, { method: 'PUT' })
                    .then(response => response.json())
                    .then((response) => {
                        console.log(response)


                        //this.setState({tasks: response});
                    });





            }
            // fetch('http://localhost:8080/tasks/'+id, {method: 'POST'})
            //     .then((response=> console.log(response)))
                // .then((isDone) => this.setState({status: 'true'}))





            // if(isDone === false){
            //     set(isDone) === true;
            // }
            //
            // console.log(isDone);

        }


        return (
            <div className="app">
                <div className="tasks">
                    {this.state.tasks.map(task => <div key={task.id}>{task.name}
                        <button key={task.id} type="button" onClick={ () => markTask(task.id, task.isDone)}> mark as done </button>
                        <button type="button" onClick={ () => deleteTask(task.id)}> delete
                        </button>
                        <button id={task.id} type="button" onClick={(id) => this.setState({ fixable: !this.state.fixable })}
                        >
                            Edit task {task.id}
                        </button>

                    </div> )}
                </div>
                <CreateTask></CreateTask>
                {this.state.fixable && <UpdateTask></UpdateTask>}


            </div>
        );
    }
}

export default App