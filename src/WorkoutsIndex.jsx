import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function WorkoutsIndex(props) {
  return (
    <div>
      <h1>All Workouts</h1>
      <div>
        {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> */}
      </div>
      {props.workouts.map((workout) => (
        <div key={workout.id}>
          <Container>
            <Row>
              <Col>1 of 3</Col>
            </Row>
            <Card style={{ width: "18rem" }} className="mx-5 my-5">
              <Card.Img variant="top" src={workout.img} />
              <Card.Body>
                <Card.Title>
                  <h2>{workout.name}</h2>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button onClick={() => props.onShowWorkout(workout)}>More info</Button>
              </Card.Body>
            </Card>
          </Container>
          {/* <h2>{workout.name}</h2> */}
          {/* <img src={workout.img} /> */}
          {/* <button onClick={() => props.onShowWorkout(workout)}>More info</button> */}
        </div>
      ))}
    </div>
  );
}
