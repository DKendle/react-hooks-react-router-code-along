import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import About from './About';
import Messages from './Messages';
import Signup from './Signup';
import NavBar from './NavBar';


function App() {
    return (
        <div>
            <NavBar/>
                <Switch>
                    <Route exact path='/about'>
                        <About />
                    </Route>

                    <Route exact path='/login'>
                        <Login />
                    </Route>

                    <Route exact path='/'>
                        <Home />
                    </Route>

                    <Route exact path="/signup">
                        <Signup />
                    </Route>
                    <Route exact path="/messages">
                        <Messages />
                    </Route>
                </Switch>
        </div>
    )
}
export default App;