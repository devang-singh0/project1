import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CourseCard from "./card.jsx";
import { fetchUserCourses } from "../store/slices/user.js";
const User = () => {
    const dispatch = useDispatch();
    let course = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(fetchUserCourses());
    }, []);
    return (
        <>
            <h2 style={{margin: '20px'}}>My learnings</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', margin: '20px' }}>
                {course?.userCourses?.length > 0 ? (
                    course.userCourses.map((item) => (
                        <CourseCard key={item.id} data={item}></CourseCard>
                    ))
                ) : (
                    <p>Nothing found.</p>
                )}
            </div>
        </>
    );
}

export default User;