import React from 'react';

const Pagination = ({pagesArray, page, setPage}) => {
    return (
        <div className="page__wrapper">
            {pagesArray.map(p => <span key={p} className={p === page?"page page__current":"page"} onClick={()=>setPage(p)}>{p}</span>)}
        </div>
    );
};

export default Pagination;
