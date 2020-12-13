import logo from './logo.svg';
import './App.css';
import Week2 from "./Components/Week2";

import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      
      <Week2 />
      
    </div>
    <Switch>
          <Route path="/week-2">
            <Week2 />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
