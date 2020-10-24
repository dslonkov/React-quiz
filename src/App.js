import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Quiz from './container/Quiz/Quiz';
import Auth from "./container/auth/Auth";
import QuizList from "./container/quiz-list/QuizList";
import QuizCreator from "./container/quizCreator/QuizCreator";
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Logout from './component/logout/Logout';
import {autoLogin} from '../src/store/actions/auth'

class App extends Component {

  componentDidMount() {
    this.props.autoLogin()
  }

  render() {

    let routes = (
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/quiz/:id' component={Quiz} />
        <Route path='/' exact component={QuizList} />
        <Redirect to='/' />
      </Switch>
    );

    if (this.props.isAuthenticaded) {
      routes = (
        <Switch>
          <Route path='/quiz-creator' component={QuizCreator} />
          <Route path='/quiz/:id' component={Quiz} />
          <Route path='/logout' component={Logout} />
          <Route path='/' exact component={QuizList} />
          <Redirect to='/' />
        </Switch>
      );
    }

    return (
      <Layout>
        { routes }
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticaded: !!state.auth.token
  }
}

function mapDispatchtoProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(App));
