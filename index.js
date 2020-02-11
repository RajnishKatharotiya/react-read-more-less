import React, { useState } from 'react';

const ReadMoreLess = ({ text, moreText, lessText, maxChar, onlyInMobile }) => {
    const [ visible, setVisible ] = useState(false)
    const handleConvertToLessOrMore = (v) => {
        setVisible(v)
    }
    const shouldView = () => {
        return onlyInMobile ? (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera) : true;
    }
    if(text.length > maxChar && shouldView){
        let newText = text.substr(0, maxChar);
        newText = `${text}...`;
        return (
            <span className="doc-read-more-wrapper">
                {visible ? text : newText}
                <span onClick={() => handleConvertToLessOrMore(!visible)}>
                    {visible ? lessText : moreText}
                </span>
            </span>
        )
    }

    return ({text})
}

export default ReadMoreLess
