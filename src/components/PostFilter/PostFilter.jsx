import React from 'react';
import Input from "../UI/Input/Input";
import SelectList from "../UI/SelectList/SelectList";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Input placeholder="Search" value={filter.searchString} onChange={e => setFilter({...filter, searchString: e.target.value})}/>
            <SelectList
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
                defaultValue='Сортировка по'
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}/>

        </div>
    );
};

export default PostFilter;
