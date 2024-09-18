import React, { useState } from 'react'
import Card from './Card';
function Cards({courses, category}) {
    //return you a list of all courses received from the api response
    const [likedCourses, setLikedCourses] = useState([]);
    const getCourses = () =>{
       if(category === "All"){
        let allCourses = [];
        Object.values(courses).forEach( courseCategory =>{
            courseCategory.forEach(course =>{
                allCourses.push(course);
            })
        })

        return allCourses;
       }
       else{
        // sirf specific category ka data pass karunga
        return courses[category];
       }
    }


    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map( (course) => {
                  return <Card course = {course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                })
            }
        </div>
    )
}

export default Cards
