import logo from "./logo.svg";
import "./App.scss";
import MyComponent from './Example/MyComponent';
import ListToDo from "./ToDo/ListToDo";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="A">
      <header className="App-header">
        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to React and learn with Anh Tú</p>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todo">
            <ListToDo />
          </Route>
          <Route path="/about">
            <MyComponent />
          </Route>
          <Route path="/user" exact>
            <ListUser />
          </Route>
          <Route path="/user/:id">
            <DetailUser />
          </Route>
        </Switch>
      </header>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </div>
    </BrowserRouter>
  );
}

export default App;
