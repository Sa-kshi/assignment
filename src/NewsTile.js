import React from 'react'
import style from "./NewsTile.module.css";

export default function NewsTile({news}){
    var cts = news["publishedAt"];
     var cdate = (new Date(cts)).toString();
    return(
        <div className={style["newstile"]}>
            <h3><a href={news["url"]}>{news["title"]}</a></h3>
            <p>{cdate}</p>
        </div>
    )
}