import React from 'react'
import AnswerItem from './answerItem/AnswerItem'
import classes from './AnswersList.module.scss'

const AnswersList = props => (
 <ul className={classes.AnswersList}>
  {props.answers.map((answer, index) => {
   return (
    <AnswerItem
      key={index} 
      answer={answer}
      onAnswerClick={props.onAnswerClick}
      state={props.state ? props.state[answer.id] : null}
    />
   )
  })}
 </ul>
)

export default AnswersList