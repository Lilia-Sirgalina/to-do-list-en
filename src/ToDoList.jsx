import { Component } from "react";

export class ToDoList extends Component {
    constructor() {
        super();

        this.state = {
            item: '',
            listArray: []
        }
    }

    handleChange(event) {
        this.setState({item: event});        
    }

    addItem(item) {
        
        if (item === '') {
            alert(`You haven't written anything`);
        }
        else {
            let list = this.state.listArray;
            list.push(item);
            this.setState({
                listArray: list,
                item: ''
            })            
        }
        
    }

    crossItem(event) {
        const li = event.target;
        li.classList.toggle('crossed');        
    }

    deleteItem(index) {        
        let removedItem = this.state.listArray.filter((item, i) => i !== index);             
        this.setState({listArray: removedItem}); 
    }

    deleteList() {
        let list = this.state.listArray;
        list = [];
        this.setState({listArray: list})
    }

    onFormSubmit(e) {
        e.preventDefault(e)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                <h1>What are your plans for today?</h1>
                <div className="int">
                    <input type="text" value={this.state.item} onChange={(event) => {this.handleChange(event.target.value)}} /> 
                </div>

                <div className="container">
                    <button className="btn" onClick = {() => this.addItem(this.state.item)}>Add</button>
                    <ul>
                        {this.state.listArray.map((item, index) => (
                            <li onClick={this.crossItem} onDoubleClick = {() => this.deleteItem(index)} key={index}>{item}</li>
                        ))}
                    </ul>
                    <button className="btn" onClick={() => this.deleteList()}>Delete</button>
                </div>
                </form>
            </div>
        )
    }

}