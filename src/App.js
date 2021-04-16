import './App.css';
import UserList from "./Components/UserList"
import UserDetails from "./Components/UserDetails"
import history from './history';
import DataInfoContextProvider from "./Context/DataContext"


import { Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">  
    <DataInfoContextProvider>
      <header className="App-header">
        Welcome to User Profiles
        </header>
        <Router history={history}>
          <div className="App">
             <Switch>
            <Route exact path="/" component={UserList} />
            <Route path="/profile" component={UserDetails}/>
            </Switch>
          </div>
    </Router>
    </DataInfoContextProvider>
    </div>
  );
}

export default App;
