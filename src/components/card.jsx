import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
export default function CourseCard({data}) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }}>
      {data ? (
        <>
          <Card.Img variant="top" src={`https://dummyimage.com/600x400/000/fff&text=${data.name.split(' ').slice(0, 3).join('+')}`} />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              {data.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{data.instructor}</ListGroup.Item>
            <ListGroup.Item>Status: {data.enrollmentStatus}</ListGroup.Item>
            <ListGroup.Item>{data.duration}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link onClick={()=> navigate(`/course/${data.id}`)}>View Details</Card.Link>
          </Card.Body>
        </>
      ) : (
        <p></p>
      )}
    </Card>
  )
}