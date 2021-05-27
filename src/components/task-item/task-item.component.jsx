import React from 'react';

import './task-item.styles.scss';

const TaskItem = ({ id, title, asignee, reporter, dueDate }) => (
    <div className="task-item">
        <div className="title">{title}</div>
        <div className="asignee">{asignee}</div>
        <div className="reporter">{reporter}</div>
        <div className="duedate">{dueDate}</div>
    </div>
)

export default TaskItem;