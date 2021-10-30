import style from "./App.module.css";
import Searchform from "./searchform";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import NewsTile from "./NewsTile";

function App() {
    //   to store the list of record recieved
  const [news, setnews] = useState([]);

  //Fetched the data at the time Raect DOM is setup (step 1)
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await Axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`
        );
        console.log(res.data);
        setnews(res.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticle();
  }, []);

  return (
    <>
      <h1> News! </h1>
        {/* search bar */}
      <Searchform />


     {/*Returning the records component*/}
      <section>
        {news.map((newsone) => {
          return <NewsTile news={newsone} />;
        })}
      </section>
    </>
  );
}

export default App;
