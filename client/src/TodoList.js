import React, {Component} from 'react'

class TodoList extends Component {

    mapArray() {
        if (this.props.isDone == true) {
            this.props.isDone = "is done";
            <strike>{this.props.data}</strike>
        }
        else {
            this.props.isDone = "is not done"
        }

    }


    render() {

        var forEachItem = this.props.arr.map(
            eachItem => {this.mapArray()}
        );

        return (
            <div>
                {/*<p>{eachItem.username} has to {eachItem.todo} {eachItem.isDone.toString()}  </p>*/}
                <p>{eachItem._id}</p>
                <p>{eachItem.username}</p>
                <p>{eachItem.todo}</p>
                <p>{eachItem.isDone}</p>
                <button onClick={() => this.props.deleteFunction(eachItem._id)}>Delete</button>
                <hr/>
            </div>
        );

        return (
            <div>
                <h2>{forEachItem}</h2>
            </div>
        );
    }

}




export default TodoList;