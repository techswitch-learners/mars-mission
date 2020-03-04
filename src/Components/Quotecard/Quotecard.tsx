import React from "react";
import "./QuoteCard.scss"

interface QuotecardProps {
    quote:string;
    author:string;    
}

export function Quotecard(props:QuotecardProps){
    return(
        <div className="quotecard">
            <p className="quoteText">{props.quote}</p>
            <p className="quoteAuthor">--{props.author}</p>            
        </div>
        
    )
    
}