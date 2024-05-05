import { useSelector } from 'react-redux';
import './course.scss'
import { useParams } from 'react-router-dom'
export default function CoursePage() {
    let { id } = useParams();
    const course = useSelector((state) => state.course.courses.find((course) => course.id == id));
    return (
        <section id="product-info">
            <div className="item-image-parent">

                <div className="item-image-main">
                    <img src={`https://dummyimage.com/600x400/000/fff&text=${course?.name?.split(' ').slice(0, 3).join('+')}`} alt="default" />
                </div>
            </div>

            <div className="item-info-parent">
                <div className="main-info">
                    <h2>{course?.name}</h2>
                    <p>{course?.description}</p>
                    <div className="star-rating">
                        <span>★★★★</span>★
                    </div>
                    <p>Price: <span id="price">₹ 449.00</span></p>
                </div>
                <div className="select-items">
                    <div className="description">
                        <ul>
                            <li>duration: {course?.duration}</li>
                            <li>instructor: {course?.instructor}</li>
                            <li>Location: {course?.location}</li>
                            <li>schedule: {course?.schedule}</li>
                        </ul>
                    </div>
                </div>
                <div id="timeline-container">
                    <div className="inner-container">
                        <h2 className="heading">Course Timeline</h2>
                        <ul className="timeline">
                            {course?.syllabus.map((item, index) => {
                                return (
                                    <li className="timeline-item" data-date={`${item.week} week`}>{item.topic}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}