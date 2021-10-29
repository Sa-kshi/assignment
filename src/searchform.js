import style from "./App.module.css";
//import './key';
import Axios from 'axios';
import { useState } from 'react';
import NewsTile from './NewsTile';
import FilterForm from "./filter";

function Searchform() {
    const [query, setquery] = useState("");
    const [news, setnews] = useState([]);
   // const [cat,setcat] = useState("sports");

    var url = `https://newsapi.org/v2/everything?q=${query}&apiKey=6a1d4f2afd3b4379bd04f56e72a8bb6d`;

    async function getNews() {
        var result = await Axios.get(url);
        setnews(result.data.articles);
        console.log(result.data);
    }

    const onSubmit =(e)=>{
        e.preventDefault();
        getNews();
    };

    return (
        <> 
            <form className = {style["app_form"]} onSubmit={onSubmit}>
            <input type = "text"
            className ={style["app_input"]}
            placeholder = "Enter search phrase"
            value = { query }
            onChange = {(e) => setquery(e.target.value) }/>
            <input type="submit" className ={style["app_submit"]} value="Search"/>
            {/* <select className={style["app_select"]}>
                <option onClick={() => setcat("technology")}>Technology</option>
                <option onClick={() => setcat("business")}>Business</option>
                <option onClick={() => setcat("entertainment")}>Entertainment</option>
                <option onClick={() => setcat("general")}>General</option>
                <option onClick={() => setcat("health")}>Health</option>
                <option onClick={() => setcat("science")}>Scinece</option>
                <option onClick={() => setcat("sports")}>Sports</option>
            </select> */}
            <FilterForm />
            </form>   

        <div>
            {news.map(newsone =>{
            // return <p>{newsone["title"]}</p>
            return <NewsTile news={newsone} />
            })}
        </div>

        </>
    );
}

export default Searchform;