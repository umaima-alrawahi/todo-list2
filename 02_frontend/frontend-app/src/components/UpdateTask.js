import React from "react";

class UpdateTask extends React.Component {
    constructor(props) {
        super(props);
        const id = props.id;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateTask = this.updateTask.bind(this);
    }

    updateTask() {
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
            [name]: value
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
                        <input type="button" value="Update task" onClick={this.updateTask}/>
                    </div>


                </form>
            </div>
        )
    }

}

export default UpdateTask