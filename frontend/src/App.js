import "./App.css";
import AddStudent from "./components/AddStudent";
import AllStudents from "./components/AllStudents";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact Component={AllStudents} />
          <Route path="/add" exact Component={AddStudent} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
