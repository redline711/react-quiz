import React from 'react'
import classes from './FinishedQuiz.module.css'

const FinishedQuiz = props => {
	const successCount = Object.keys(props.results).reduce((total, key) => {
		if (props.results[key] === 'success') {
			total++
		}
		return total
	}, 0)
	return (
		<div className={classes.FinishedQuiz}>
			Finished
			<ul>
				{props.quiz.map((quizItem, index) => {
					const cls = [
						'fas',
						props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check'
					]
					const color = classes[props.results[quizItem.id]]
					return (
						<li key={index}>
							<strong>{index + 1}</strong>. &nbsp;
							{quizItem.question}
							<span className={color}>
								<i className={cls.join(' ')} />
							</span>
						</li>
					)
				})}
			</ul>
			<p>
				Правильно: {successCount} из {props.quiz.length}
			</p>
			<div>
				<button onClick={props.onRetry}>Повторить</button>
			</div>
		</div>
	)
}

export default FinishedQuiz
