import React, { Component } from "react";
import classes from './QuizList.module.scss'
import {NavLink} from 'react-router-dom'
import Loader from '../../component/UI/loader/Loader'
import { connect } from "react-redux";
import { fetchedQuizes } from "../../store/actions/quiz";


class QuizList extends Component {

 renderQuizes() {
  return this.props.quizes.map(quiz => {
   return (
    <li
     key={quiz.id}
    >
     <NavLink to={'/quiz/' + quiz.id}>
      {quiz.name}
     </NavLink>
    </li>
   )
  })
 }

 componentDidMount() {
   this.props.fetchedQuizes()
 }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>
          {this.props.loading && this.props.quizes.length !== 0
           ? <Loader />
            : <ul>{this.renderQuizes()}</ul>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchedQuizes: () => dispatch(fetchedQuizes())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(QuizList)
