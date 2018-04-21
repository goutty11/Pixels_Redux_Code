
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import ViewPostsByUser from '../posts/ViewPostsByUser/ViewPostsByUser';
import UserProfile from '../UserProfile/UserProfile';
import Header from '../Layout/Header/Header';
//import viewBestPost  from '../ViewBestPost/ViewBestPost';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <div>
                        <Switch>
                            <Route exact path="/" component={LandingPage}/>
                            <Route path="/userProfile" component={UserProfile}/>
                            <Route path="/postsByUser" component={ViewPostsByUser} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;