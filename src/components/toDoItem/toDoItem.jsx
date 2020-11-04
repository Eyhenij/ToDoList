import React from 'react';
import s from './toDoItem.module.css';

const ListItem = () => {
    return (
        <div className={s.list__item}>
            <div className={s.item__description}>
                some content
            </div>
            <div className={s.item__input} >
                <input type="checkbox" />
            </div>
        </div>
    )
}

export default ListItem;