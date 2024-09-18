import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import { toast } from "react-toastify";
import Spinner from './component/Spinner'
const App = () => {
    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(filterData[0].title);
    const fetchData = async() =>{
        setLoading(true);
      try{
          const res = await fetch(apiUrl);
          const data = await res.json();

          // save the data;
          console.log(data.data);
          setCourses(data.data);
      }
      catch(error){
        toast.error("Something went Wrong");
      }
      setLoading(false);
    }
    useEffect( () =>{
      fetchData();
    },[])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2 ">
      <div>
      <Navbar></Navbar>
      </div>

      <div>
      <div>
      <Filter filterData ={filterData} 
      category={category}
      setCategory={setCategory}
      ></Filter>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>
      </div>
      
    </div>
  )
};

export default App;
