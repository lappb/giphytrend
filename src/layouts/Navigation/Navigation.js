import React from 'react';
import {Link,IndexLink} from 'react-router';
import {defineMessages,FormattedMessage} from 'react-intl';
import NavLink from './NavLink';
import './Navigation.scss'

class NavigationMenu extends React.Component{
    render() {
        const categories = [{id:1,name:'Recommended for you'},{id:2,name:'trending'},
                            {id:3,name:'shopping'},{id:4,name:'eating'},
                            {id:5,name:'drinking'},{id:6,name:'reading'},
                            {id:7,name:'relax'},{id:8,name:'traveling'},
                            {id:9,name:'hotel'},{id:10,name:'health'},
                            {id:11,name:'misc'}]
        return (
            <div className="rcm-navigation">
                <ul>
                {categories.map((item,index)=>(
                    <li className="" key = {index}>
                      <Link to={`/explore/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
                </ul>
            </div>
        )
    }
}

export default NavigationMenu;
