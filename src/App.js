import Chat from "./Chat";
import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  console.log("Gibberish");
  console.log(user);
  return (
    <div className="App">
      <h1>Hello from th e react app</h1>
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Router>
            <Sidebar />
            <Route path="/rooms/:id">
              <Chat />
            </Route>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
