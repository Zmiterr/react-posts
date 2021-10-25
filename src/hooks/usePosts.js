const {useMemo} = require("react");

const useSort = (sort, posts)=>{
    return useMemo(()=> {
        return sort
            ?[...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
            :[...posts]
    }, [posts, sort])
}

export const usePosts = (sort, posts, searchString, searchField)=>{
    const sortedPosts = useSort(sort, posts)
    return useMemo(() => {
        //TODO  searchField variable without title
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchString))
    }, [sortedPosts, searchString])
}
