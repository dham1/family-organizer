import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: "Tasks",
                    id: 1,
                    linkUrl: "tasks"
                },
                {
                    title: "Fun",
                    id: 2,
                    linkUrl: ""

                },
                {
                    title: "Tasks2",
                    id: 3,
                    linkUrl: ""
                },
                {
                    title: "Personal",
                    id: 4,
                    linkUrl: ""

                },

            ]
        }
    }

    render() {
        return (
            <div class='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;