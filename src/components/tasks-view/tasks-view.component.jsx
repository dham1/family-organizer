import React from 'react';

import ListView from './list-view.component';
import BlockView from './block-view.component';
import CalendarView from './calendar-view.component';

import './tasks-view.styles.scss';

class TasksView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            view: 0
        }
    }

    displayView = (view, data) => {
        switch (view) {
            case 0: //list view
                return <ListView tasks={data} />;
            case 1: //block view
                return <BlockView tasks={data} />;
            case 2://calendar view
                return <CalendarView tasks={data} />
            default: <ListView tasks={data}/>
        }
    }
    render() {
        return (
            <>
                <div className="tasks-view">
                    <button onClick={() => { this.setState({ view: 0 }) }}>List</button>
                    <button onClick={() => { this.setState({ view: 1 }) }}>Block</button>
                    <button onClick={() => { this.setState({ view: 2 }) }}>Calendar</button>
                    {this.displayView(this.state.view, this.props.tasks)}
                </div>
            </>
        );
    }
}

export default TasksView;