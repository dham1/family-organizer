import React from 'react';

import TaskItem from '../task-item/task-item.component';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import './tasks-view.styles.scss';
const events = [
    {
        title: 'test event',
        start: new Date(2021, 7, 28, 2, 30),
        end: new Date(2021, 7, 29, 2, 30),

    },
    {
        title: 'test event',
        start: new Date(2021, 5, 28, 2, 30),
        end: new Date(2021, 5, 29, 2, 30),

    },
];
const localizer = momentLocalizer(moment)
const CalendarView = ({ tasks }) => (
    <div>
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
        />
    </div>

)
// {tasks.map(({ id, ...otherTaskProps }) => (
//     <TaskItem key={id} {...otherTaskProps} />
// ))}
export default CalendarView;

