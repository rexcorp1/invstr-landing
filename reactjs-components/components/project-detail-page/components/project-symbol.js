import React from 'react';

export const ProjectSymbol = (props) => {
    return (
        <div className="row">
            <p id="project-symbol">
                {props.name}
            </p>
        </div>
    );
}
