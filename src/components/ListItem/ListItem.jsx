import React from 'react';
import s from './ListItem.module.css';

const ListItem = (props) => {
    const resolvedClass = {
        textDecoration: 'line-through'
    }
    return (
        <div className={s.list__item}>
            <div style={props.completed == true ? resolvedClass : {}}>
                {props.description}
            </div>
            <div className={s.item__input}>
                <input
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={props.handleChange}
                />
            </div>
        </div>
    )
}

export default ListItem;