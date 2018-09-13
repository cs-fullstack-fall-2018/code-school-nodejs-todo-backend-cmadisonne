import React, {Component} from 'react'

class TodoList extends Component{

    render(){

        var forEachItem = this.props.arr.map(

            eachItem => {
            if (eachItem.isDone = true){
                eachItem.isDone = "is done"
            }
            else
            {
                eachItem.isDone = "is not done"
            }
        return (
                    <div>
                        <p>{eachItem.username} has to {eachItem.todo} {eachItem.isDone.toString()}  </p>
                        {/*<p>{eachItem.todo}</p>*/}
                        {/*<p>{eachItem.isDone}</p>*/}
                    <hr/>
                    </div>
                )
            }

        );
        return(
            <div>
                <h2>{forEachItem}</h2>
            </div>
        )
    }
}

export default TodoList;