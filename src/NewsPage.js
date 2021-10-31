import React, {useContext} from "react";
import NewsTile from './NewsTile';
import { NewsContext } from "./App";

function NewsPage(){
        //state value recieved rendered 
    let {news} = useContext(NewsContext) ; 

    return(
        <section>
        {news.map((newsone) => {
          return <NewsTile news={newsone} />;
        })}
      </section> 
    );
}
export default NewsPage;