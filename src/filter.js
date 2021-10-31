import style from "./App.module.css";
import Axios from "axios";
import { useContext }from "react";

import {NewsContext} from "./App";

function FilterForm() {
    //maintinig global state 
  let {news,setnews} = useContext(NewsContext) ; 
  //(step 3)

  //function called each time the filter option selected
  async function getNews(cat) {
    //clearState()
    var result = await Axios.get(
      `https://newsapi.org/v2/top-headlines?category=${cat}&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    setnews(result.data.articles);
    console.log(result.data);
  }


  return (
    <>
                {/*
                // here we create a basic select input
                // we set the value to the selected value
                // and update the setFilterParam() state every time onChange is called
                 */}
      <select className={style["app_select"]} onChange={(e) => { getNews(e.target.value);}} aria-label="Filter">

        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
        <option value="health">Health</option>
        <option value="entertainment">Entertainment</option>
        <option value="general">General</option>
        <option value="science">Science</option>
        <option value="business">Business</option>
      </select>

    </>
  );
}

export default FilterForm;
