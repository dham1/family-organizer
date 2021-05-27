import React from 'react';
import TaskItem from '../task-item/task-item.component';
import ListGroup from 'react-bootstrap/ListGroup';
import './tasks-view.styles.scss';
const ListView = ({ tasks }) => (
    <div className="list-view">
        <ListGroup>

            {tasks.map(({ id, ...otherTaskProps }) => (
                <ListGroup.Item>
                    <TaskItem key={id} {...otherTaskProps} />
                </ListGroup.Item>

            ))}

        </ListGroup>


    </div>
)
export default ListView;