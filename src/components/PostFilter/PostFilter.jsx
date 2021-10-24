import React from 'react';
import Input from "../UI/Input/Input";
import SelectList from "../UI/SelectList/SelectList";

const PostFilter = ({filter, setFilter,limit, setLimit}) => {
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
            <SelectList
                value={limit}
                onChange={limit => setLimit(limit)}
                defaultValue='posts on page'
                options={[
                    {value: '10', name: '10'},
                    {value: '20', name: '20'},
                    {value: '-1', name: 'all'}
                ]}/>

        </div>
    );
};

export default PostFilter;
