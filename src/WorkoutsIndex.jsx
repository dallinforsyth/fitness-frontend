import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function WorkoutsIndex(props) {
  return (
    <div>
      <h1>All Workouts</h1>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      {props.workouts.map((workout) => (
        <div key={workout.id}>
          <h2>{workout.name}</h2>
          <img src={workout.img} />
          <button onClick={() => props.onShowWorkout(workout)}>More info</button>
        </div>
      ))}
    </div>
  );
}
