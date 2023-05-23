import React from "react";
import './listToDo.scss';
import AddToDo from "./AddToDo";
import {toast } from "react-toastify";

class ListToDo extends React.Component {
    state = {
        listTodo:[
            {id:'todo1', title:'Doing Work'},
            {id:'todo2', title:'Sleep Well'},
            {id:'todo3', title:'Learning English'}
        ],
        editTodo:{}
    }

    addnewToDo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })

        toast.success("Thêm Thành Công")
        }

    handleDelete = (todo) => {
        let currentDelete = this.state.listTodo;
        currentDelete = currentDelete.filter(item => item.id !== todo.id);
        this.setState({
            listTodo: currentDelete
        })
        toast.success("Xóa Thành Công")
    }

    handleEdit = (todo) => {
        let {editTodo, listTodo} = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0

        //save
        if(isEmptyObj === false && editTodo.id === todo.id){

            let listToDoEdit = [...listTodo];

            let objIndex = listToDoEdit.findIndex((item => item.id === todo.id));

            listToDoEdit[objIndex].title = editTodo.title;

            this.setState({
                listTodo: listToDoEdit,
                editTodo: {}
            })

            toast.success("Lưu Thành Công")
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })
    }

    handleonChangeEdit = (event) => {
        let savetodo = {...this.state.editTodo};
        savetodo.title = event.target.value;
        this.setState({
            editTodo: savetodo
        })
    }
        
    render(){
        let {listTodo, editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0

        return(
            <div className="List-All">
               <AddToDo
                    addnewToDo = {this.addnewToDo}
               />
                <div className="List-Todo">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return(
                                <div className="List-Child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span> {index + 1} - {item.title} </span>
                                        :
                                        <>
                                        {editTodo.id === item.id ?
                                            <span> {index + 1}
                                                <input value={editTodo.title} 
                                                onChange={(event) => this.handleonChangeEdit(event)}/>
                                            </span>
                                            :
                                            <span>
                                                {index + 1} - {item.title} 
                                            </span>
                                        }   
                                        </>                                       
                                    }
                                    <button className="btn1"
                                    onClick={() => this.handleEdit(item)}>
                                        {isEmptyObj === false && editTodo.id === item.id ? 'save' : 'edit'}
                                    </button>
                                    <button className="btn2" 
                                    onClick={() => this.handleDelete(item)}>
                                        Delete
                                    </button>
                                </div>   
                            )
                        })
                    }                                 
                </div>
            </div>
        )
    }
}

export default ListToDo