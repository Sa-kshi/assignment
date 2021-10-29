//import style from "./App.module.css";
import Searchform from './searchform';
import React ,{useEffect , useState} from "react";
import Axios from "axios";
import NewsTile from './NewsTile';

function App() {
     const [news, setnews] = useState([]); 
    //const [isLoad,setisLoad] = useState(true);

    useEffect(() =>{
        const fetchArticle = async () =>{
        try{
              const res = await Axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=6a1d4f2afd3b4379bd04f56e72a8bb6d`)
                console.log(res.data);
                setnews(res.data.articles);
            }catch(error){
            console.error(error);
            }
        }
        fetchArticle()
    },[])
  
    return ( 
        <>
            
        <h1> News! </h1>
        <Searchform />

        <section>
        {news.map((newsone) =>{
              return (<NewsTile news={newsone} />)
        })}
        </section>
       
        </>
    );
}

export default App;