import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../store/slices/course.js";
import { useEffect } from "react";
import CourseCard from "./card.jsx";
const Home = () => {
    const dispatch = useDispatch();
    let course = useSelector((state) => state.course);
    useEffect(() => {
        dispatch(fetchCourses());
    }, []);
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', margin: '20px'}}>
            {course?.isLoading ? (
                <p>Loading...</p>
            ) : course?.courses?.length > 0 ? (
                course.courses.map((item) => (
                    <CourseCard key={item.id} data={item}></CourseCard>
                ))
            ) : (
                <p>Nothing found.</p>
            )}
        </div>
    );
}

export default Home;