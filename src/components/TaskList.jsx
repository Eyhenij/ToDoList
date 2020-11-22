import React from 'react';
import s from './taskList.module.css';

const TaskList = (props) => {
    return <div>
        {props.arrListData.map(i =>
            <div key={i.id} className={s.list__item}>
                <div className={s.item__description}>
                    {i.description}
                </div>
                <div className={s.item__input}>
                    <input
                        type="checkbox"
                        defaultChecked={i.completed}
                    />
                </div>
            </div>
        )}
    </div>
}

export default TaskList;
