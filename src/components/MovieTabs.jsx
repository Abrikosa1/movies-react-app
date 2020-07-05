import React from "react";

class MovieTabs extends React.Component{
    componentWillReceiveProps(nextProps, textState) { //deprecated. will be removed in react 17
        console.log("componentWillReceiveProps");
        console.log("thisProps", this.props);
        console.log("nextProps", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) { //не рендерит повторно если пропсы те же
        if(nextProps.sort_by !== this.props.sort_by) {
            return true;
        } else return false;
    }
    
    render() {
        const { sort_by, updateSortBy } = this.props;
        const handleClick = value => () => {
            updateSortBy(value);
        };

        // const handleClick = value => { // value - event
        //     return () => {
        //         updateSortBy(value); 
        //     }
        // }

        const getClassLink = value => {
            return `nav-link ${sort_by === value ? "active" : "" }`;
        }

        return(
            <ul className="tabs nav nav-pills">
                <li className="nav-item">
                    <div className={getClassLink("popularity.desc")} onClick={handleClick("popularity.desc")}>
                    Popularity desc
                    </div>
                </li>
                <li className="nav-item">
                    <div className={getClassLink("revenue.desc")} onClick={handleClick("revenue.desc")}>
                    Revenue desc
                    </div>
                </li>
                <li className="nav-item">
                    <div className={getClassLink("vote_average.desc")} onClick={handleClick("vote_average.desc")}> 
                    Vote average desc
                    </div>
                </li>
            </ul>
        );
    }
}

export default MovieTabs;