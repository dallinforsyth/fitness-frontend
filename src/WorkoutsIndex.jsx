import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "./Modal";
import { WorkoutsShow } from "./WorkoutsShow";

export function WorkoutsIndex(props) {
  const [currentBodyGroupId, setCurrentBodyGroupId] = useState();
  const [workouts, setWorkouts] = useState([]);
  const [isWorkoutsShowVisible, setIsWorkoutsShowVisible] = useState(false);
  const [currentWorkout, setCurrentWorkout] = useState({});

  useEffect(() => {
    handleIndexWorkouts();
  }, [currentBodyGroupId]);

  const handleShowWorkout = (workout) => {
    console.log("handleShowWorkout", workout);
    setIsWorkoutsShowVisible(true);
    setCurrentWorkout(workout);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsWorkoutsShowVisible(false);
  };

  const handleIndexWorkouts = () => {
    console.log("handleIndexWorkouts");
    console.log(currentBodyGroupId);
    let workoutsUrl;
    if (currentBodyGroupId) {
      workoutsUrl = `http://localhost:3000/workouts?body_group_id=${currentBodyGroupId}.json`;
    } else {
      workoutsUrl = "http://localhost:3000/workouts.json";
    }
    axios.get(workoutsUrl).then((response) => {
      console.log(response.data);
      setWorkouts(response.data);
    });
  };
  return (
    <div>
      <Form.Select aria-label="Default select example" onChange={(event) => setCurrentBodyGroupId(event.target.value)}>
        <option value="">All Workouts</option>
        <option value="1">Arms</option>
        <option value="2">Legs</option>
        <option value="3">Core</option>
        <option value="4">Chest</option>
        <option value="5">Shoulder</option>
        <option value="6">Back</option>
      </Form.Select>
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
      <Container fluid="true">
        <Row>
          {workouts.map((workout) => (
            <Col lg={4} md={5} key={workout.id}>
              {/* <Col sm="auto">1 of 3 */}
              <Card className="my-5">
                <Card.Img variant="top" src={workout.img} />
                <Card.Body>
                  <Card.Title>
                    <h2>{workout.name}</h2>
                  </Card.Title>
                </Card.Body>
              </Card>
              {/* </Col> */}
              {/* <h2>{workout.name}</h2> */}
              {/* <img src={workout.img} /> */}
              {/* <button onClick={() => props.onShowWorkout(workout)}>More info</button> */}
            </Col>
          ))}
        </Row>
      </Container>
      <Modal show={isWorkoutsShowVisible} onClose={handleClose}>
        <WorkoutsShow workout={currentWorkout} />{" "}
      </Modal>
    </div>
  );
}
