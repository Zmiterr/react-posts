import React, {useMemo} from 'react';

const Pagination = ({pagesCount,  page, setPage}) => {
    const pagesArray = useMemo(()=>{
        const pagesArray = []
        for(let i=1; i<=pagesCount; i++){
            pagesArray.push(i)
        }
        return pagesArray
    },[pagesCount])
    return (
        <div className="page__wrapper">
            {pagesArray.map(p => <span key={p} className={p === page?"page page__current":"page"} onClick={()=>setPage(p)}>{p}</span>)}
        </div>
    );
};

export default Pagination;
