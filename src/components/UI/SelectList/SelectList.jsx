import React from 'react';
import classes from './SelectList.module.css'

const SelectList = ({options, defaultValue, value, onChange}) => {


    return (
        <div>
            <select
                className={classes.SelectList}
                value={value}
                onChange={(e)=>onChange(e.target.value)}
            >
                <option value="" disabled>{defaultValue}</option>
                {options.map(option =>  <option key={option.value} value={option.value}>{option.name}</option>)}
            </select>
        </div>
    );
};

export default SelectList;
