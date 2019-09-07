import React from 'react';

export const Article = (props) => {
    const {heading, content} = props;
    return (
        <div>
             <h1>{heading}</h1>
             <p>{content}</p>
        </div>   
    );
}

