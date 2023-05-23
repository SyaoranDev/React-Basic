import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

/*
    JSX => return block 
    fragment
*/
class MyComponent extends React.Component {

    state = {
        ArrCustom: 
        [
          {id:'Job1', title:'Developer', salary:'1000$'},
          {id:'Job2', title:'Tester', salary:'500$'},
          {id:'Job3', title:'Project Manager', salary:'700$'}
        ]
        
    }

    addnewJob = (Job) => {
      console.log('check my parent', Job)
      this.setState({
        ArrCustom: [...this.state.ArrCustom, Job]
      })
    }

    deleteJob = (job) => {
      let currentJob = this.state.ArrCustom;
      currentJob = currentJob.filter(item => item.id !== job.id)
      this.setState({
        ArrCustom: currentJob
      })
    }
            
  render() {
    return (
      <>
        <AddComponent
          addnewJob={this.addnewJob}
        />

        <ChildComponent 
          Custom={this.state.ArrCustom}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}

export default MyComponent;
