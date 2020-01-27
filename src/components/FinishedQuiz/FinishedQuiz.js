import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
	return (
		<div className={classes.FinishedQuiz}>
			Finished
			<ul>
				<li>
					<strong>1. </strong>
					How are you?
					<span className={classes.error}>
						<i className={'fas fa-times'} />
					</span>
				</li>
				<li>
					<strong>2. </strong>
					How are you?
					<span className={classes.success}>
						<i className={'fas fa-check'} />
					</span>
				</li>
			</ul>
			<p>Правильно 4 из 10</p>
			<div>
				<button>Повторить</button>
			</div>
		</div>
	)
}

export default FinishedQuiz
