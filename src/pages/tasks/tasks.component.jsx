import React from 'react';
import TasksView from '../../components/tasks-view/tasks-view.component.jsx';

import TASKS_DATA from './tasks.data.js';

class TasksPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: TASKS_DATA
        }
    }

    render() {
        return (
            <>
                <div className='tasks-page'>
                    <TasksView tasks={this.state.tasks} />
                </div>
            </>
        )
    }
}

export default TasksPage;