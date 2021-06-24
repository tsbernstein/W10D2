import React from 'react';
import uniqueId from '../../util/util.js'

class TodoForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    updateTitle(e) {
        this.setState({title: e.target.value});
    };
        
    updateBody(e) {
        this.setState({body: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const todo = Object.assign({}, this.state, {id: uniqueId});
        this.props.receiveTodo(todo);
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add Todo</h1>
                <label>Title
                    <input
                        type="text"
                        onChange={this.updateTitle}
                    />
                </label>
                <br />
                <label>Body
                    <input
                        type="text"
                        onChange={this.updateBody}
                    />
                </label>
                <br />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;
