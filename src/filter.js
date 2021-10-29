import style from "./App.module.css";
//import './key';
import Axios from 'axios';
import { useState } from 'react';
import NewsTile from './NewsTile';

function FilterForm() {
   // const [query, setquery] = useState("");
    const [news, setnews] = useState([]);
    const [cat,setcat] = useState("sports");

    //var url = 
    async function getNews() {
        var result = await Axios.get(`https://newsapi.org/v2/top-headlines?category=${cat}&apiKey=6a1d4f2afd3b4379bd04f56e72a8bb6d`);
        setnews(result.data.articles);
        console.log(result.data);
    }

    const onSubmit =(e)=>{
        e.preventDefault();
        getNews();
    };

    return (
        <> 
             <select className={style["app_select"]}>
                <option onClick={() => setcat("technology")}>Technology</option>
                <option onClick={() => setcat("business")}>Business</option>
                <option onClick={() => setcat("entertainment")}>Entertainment</option>
                <option onClick={() => setcat("general")}>General</option>
                <option onClick={() => setcat("health")}>Health</option>
                <option onClick={() => setcat("science")}>Scinece</option>
                <option onClick={() => setcat("sports")}>Sports</option>
            </select> 
         
        <div>
            {news.map(newsone =>{
            // return <p>{newsone["title"]}</p>
            return <NewsTile news={newsone} />
            })}
        </div>

        </>
    );
}

export default FilterForm;