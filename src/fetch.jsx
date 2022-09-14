import {useState,useEffect} from "react";


function useFetch(searchValue){

    const [data, setdata] = useState(null);
    const [isloaded, setisloaded] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      
    const  Url="http://www.omdbapi.com/?s="+searchValue+"&apikey=fc530d7a"
      fetch(Url)
          .then((res) => {
            if (!res.ok) {
              throw Error("sorry couldnt load");
            }
            return res.json();
          })
          .then((data) => {
            setdata(data.Search);
            setisloaded(false);
            setError(null);
          })
          .catch((error) => {
            setError(error.message);
            setisloaded(false);
          });
      }, [searchValue]);
      return {data,error,isloaded};
}

export default useFetch;