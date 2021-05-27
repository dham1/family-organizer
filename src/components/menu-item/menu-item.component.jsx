import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

//menu item va fi in dashboard de fapt, toate chestiile care le am eu in dashboard
//deci aici am un titlu
//dar voi avea chestiile(taskuri, personal, fun, rewards) personalizate inauntru
const MenuItem = ({ title, history, linkUrl, match, imageUrl }) => (
    <>
        <div className='menu-item' onClick={() => history.push(`${match.url}${linkUrl}`)}>

            <div className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
            </div>
        </div>
    </>
);

export default withRouter(MenuItem);