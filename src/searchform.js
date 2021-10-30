import style from "./App.module.css";
import Axios from "axios";
import { useState } from "react";
import NewsTile from "./NewsTile";
import FilterForm from "./filter";


function Searchform() {

//(step 2)

    //to store query paramter 
  const [query, setquery] = useState("");

//   to store the list of record recieved
  const [news, setnews] = useState([]); 

  var url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_API_KEY}`;

  //fuction called to get the records
  async function getNews() {
    var result = await Axios.get(url);
    setnews(result.data.articles);
    console.log(result.data);
  }

  //on the click of search button 
  const onSubmit = (e) => {
    e.preventDefault();
    getNews();
  };

  return (
    <>
      <form className={style["app_form"]} onSubmit={onSubmit}>
        <input
          type="text"
          className={style["app_input"]}
          placeholder="Enter search phrase"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input type="submit" className={style["app_submit"]} value="Search" />

        {/* to filer out by catogries  */}
        <FilterForm />
      </form>

      {/*Returning the records component*/}
      <div>
        {news.map((newsone) => {
          return <NewsTile news={newsone} />;
        })}
      </div>
    </>
  );
}

export default Searchform;
