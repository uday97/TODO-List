import React, { useContext } from 'react';
import { UserContext } from '../App';
import ShowTasksHelper from './ShowTasksHelper';
const ShowTasks = () => {
	const { tasks, setTasks, filteredTasks } = useContext(UserContext);
	//loops through the filtered tasks(on the basis of option selected) and calls another component to display each task entered
	return (
		<div>
			<ul className="collection">
				{filteredTasks.map((task) => (
					<ShowTasksHelper
						task={task}
						key={task.id}
						filteredTasks={filteredTasks}
						setTasks={setTasks}
						tasks={tasks}
					/>
				))}
			</ul>
		</div>
	);
};

export default ShowTasks;