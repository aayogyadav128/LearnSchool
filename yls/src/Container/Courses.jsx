import React from 'react';
import { CourseCard } from '../Components';

const Courses = ({ courses }) => {
    let course = [];
    course = course.concat(courses);
    
    return (
    <div>
        {course.map((item,id)=>(
            
            <div key={id}>
            <CourseCard datas={item} />
            </div>
        ))}
    </div>
    )
}

export default Courses