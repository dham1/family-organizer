import React from 'react';
import TaskItem from '../task-item/task-item.component';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

import './tasks-view.styles.scss';
import { CardGroup } from 'react-bootstrap';
const BlockView = ({ tasks }) => (
    <CardColumns>
        {tasks.map(item => (
            <Card>
                <Card.Body>
                    <TaskItem key={item.id} item={item} />
                </Card.Body>
            </Card>
        ))};
    </CardColumns>


);
export default BlockView;