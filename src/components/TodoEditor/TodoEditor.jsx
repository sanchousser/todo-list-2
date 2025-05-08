import { Component } from "react";
import { Form, Textarea } from "./ToDoEditor.styled";


class ToDoEditor extends Component {
    state = {
        message: '',
    }

    handleChange = (e) => {

        this.setState({ message: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.message);
        this.setState({message: ''});
    }


    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Textarea value={this.state.message} onChange={this.handleChange}></Textarea>
                <button type="submit">Create</button>
            </Form>
        );
    }
}

export default ToDoEditor;