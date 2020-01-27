import React from 'react'
import classes from './FinishedQuiz.module.css'
import Button from '../UI/Button/Button'

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
				<Button onClick={props.onRetry} type="primary">
					Повторить
				</Button>

				<Button type="success">Перейти в список тестов</Button>
			</div>
		</div>
	)
}

export default FinishedQuiz
