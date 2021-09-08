import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import backend paths
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact componet={ExercisesList} />
        <Route path="/edit/:id" componet={EditExercise} />
        <Route path="/create" componet={CreateExercise} />
        <Route path="/user" componet={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
