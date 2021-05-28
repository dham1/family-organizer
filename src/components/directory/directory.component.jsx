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
                    linkUrl: "tasks",
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
                },
                {
                    title: "Fun Time",
                    id: 2,
                    linkUrl: "funtime",
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'


                },
                {
                    title: "My Family",
                    id: 3,
                    linkUrl: "myfamily",
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'

                },
                {
                    title: "Due soon",
                    id: 4,
                    linkUrl: "duetasks",
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'

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