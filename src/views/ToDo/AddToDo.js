import React from "react";
import {toast } from "react-toastify";

class AddToDo extends React.Component {
    state = {
        title: ''
    }

    handleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAdd = () => {
        if(!this.state.title){
            //if(undifined/null/empty) => mặc định sẽ là false nên phải thêm chấm than để dk là đúng
            toast.error("Vui lòng không bỏ trống")
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }

        this.props.addnewToDo(todo)
        this.setState({
            title:''
        })
    }

  render() {
    let {title} = this.state
    return (
      <div className="List-Add">
        <input type="text" value={title}
            onChange={(event) => this.handleChange(event)}
        />
        <button className="btn-2" type="button" onClick={() => this.handleAdd()}>
            Add
        </button>
      </div>
    );
  }
}

export default AddToDo;
