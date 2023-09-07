import React from "react";

import "./Loading.css";

const Loading = (props) => {
    if (props.isLoading) {    
    return(
    
        <div data-testid="loading" className="Loading">
            <div className="Loading__content">
                loading…
            </div>
        </div>
    )
}
}



export default Loading;
