import React from 'react'

import { Divider } from 'antd';

const TasksMapper = ({task}) => {
	return (
		<div style={{textAlign: 'start'}}>
			{task.title}
			<Divider />
		</div>
	)
}

const Tasklist = () => {
	const [tasks, setTasks] = React.useState([]);

	React.useEffect(() => {
		async function fetcher() {
			const result = await fetch('https://jsonplaceholder.typicode.com/todos/');
			const response = await result.json();
			setTasks(response);
		}

		fetcher();
	}, [])

	if (!tasks.length) {
		return (<p>No Tasks found.</p>)
	}

	return (
		<>
			{tasks.map((task) => <TasksMapper key={task.title} task={task} />)}
		</>
	)
}

export default Tasklist
