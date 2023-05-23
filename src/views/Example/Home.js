import React from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/fullstack Javascript.png";
import { connect } from "react-redux";
import rootReducer from "../../store/reducers/rootReducer";

class Home extends React.Component {
  // componentDidMount(){
  //     setTimeout(() => {
  //         this.props.history.push('/todo')
  //     },3000)
  // }

  handleDeleteUser = (users) => {
    console.log('check delete user', users )
    this.props.deleteuserRedux(users)
  }

  handleAddUser = () => {
    this.props.adduserRedux()
  }

  render() {
    console.log("check data", this.props);
    let listusersRedux = this.props.dataRedux;
    return (
      <>
        <div>
          <img src={logo} />
        </div>
        <div>
            {listusersRedux && listusersRedux.length > 0 &&
             listusersRedux.map((item, index) => {
                return(
                    <div key={item.id}>
                        {index + 1} - {item.name}
                        &nbsp;
                        <button type="button" onClick={()=> this.handleDeleteUser(item)}>Delete</button>
                    </div>
                )
             })            
            }
            <button type="button" onClick={()=> this.handleAddUser()}>Add User</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteuserRedux: (userDelete) => dispatch({type: 'DELETE_USER' , payload: userDelete}),
        adduserRedux: () => dispatch({type: 'CREATE_USRER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home))
