import React from "react";


/*
    JSX => return block 
    fragment

*/
class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs //chấm than check điều kiện true và false mà ko cần truyền tham số
        })
    }

    handleDelete = (job) => {
        console.log('Đã xóa người dùng', job)
        this.props.deleteJob(job)
    }
  render() {
    let { Custom } = this.props;
    let { showJobs} = this.state;
    let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
    console.log('check showJob', check)
    return (
    <>  
        {showJobs === false ?
            <div>
                <button onClick={() => this.handleShowHide()}>Show</button>
            </div>
        :
            <>          
                <div className="job-list">
              {
                Custom.map((item, index) => {
                    return (
                        <div key={item.id}>
                            {item.title} - {item.salary}
                            <></><span onClick={() => this.handleDelete(item)}>X</span> 
                        </div>
                )
                })
              }
                </div>
                <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
            </>
        }
    </>
    )
  }
}

// chỉ nên dùng arrow function component khi dùng với Hook
// let MyChild = (props) => {
//     let {Custom} = props;
//         return(
//             <>
//                 <div className="job-list">
//                 {
//                     Custom.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//                 </div>
//             </>
//         )
// }

export default ChildComponent;
