import { Route, Switch } from 'react-router';
import './App.css';
import Nav from './components/Nav';
import User from './components/User';

function App() {
    return (
        <div className="App">
            <Nav />
            <Switch>
                <Route component={User} exact path="/users" />
            </Switch>
        </div>
    );
}

export default App;
