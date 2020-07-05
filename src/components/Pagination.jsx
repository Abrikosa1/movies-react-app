import React from "react";

class Pagination extends React.Component{
    render(){
        const { page, updatePageNum, total_pages } = this.props;
        let newPage = page;
        return(
            <div className="pagination">
                <button disabled={page === 1 ? true : false} onClick={updatePageNum.bind(this, newPage-1)}>Previous</button>
                <p> Current Page: {page} from {total_pages}</p> 
                <button disabled={page === 500 ? true : false} onClick={updatePageNum.bind(this, newPage+1)}>Next</button>
            </div>
        );
    }
}

export default Pagination;