import React from "react";

class CreateTask extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createTask = this.createTask.bind(this);
    }

    createTask() {
        fetch('http://localhost:8080/tasks',
            {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => console.log(response));
    }

    handleInputChange(event) {
        const target = event.target;
        const {value, name} = target;

        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div className="wrapper">
                <form>
                    <div className="form-group">
                        <label>Enter Task</label>
                        <input type="text" name="name" onChange={this.handleInputChange}/>

                    </div>
                    <div className="form-group">
                        <label>Enter id</label>
                        <input type="number" name="id" onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <input type="button" value="Create task" onClick={this.createTask}/>
                    </div>


                </form>
            </div>
        )
    }

}

export default CreateTask