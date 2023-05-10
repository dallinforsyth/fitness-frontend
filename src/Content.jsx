import { WorkoutsIndex } from "./WorkoutsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { WorkoutsShow } from "./WorkoutsShow";
import Form from "react-bootstrap/Form";

export function Content() {
  const [workouts, setWorkouts] = useState([]);
  const [isWorkoutsShowVisible, setIsWorkoutsShowVisible] = useState(false);
  const [currentWorkout, setCurrentWorkout] = useState({});

  const handleIndexWorkouts = () => {
    console.log("handleIndexWorkouts");
    axios.get("http://localhost:3000/workouts.json").then((response) => {
      console.log(response.data);
      setWorkouts(response.data);
    });
  };

  const handleShowWorkout = (workout) => {
    console.log("handleShowWorkout", workout);
    setIsWorkoutsShowVisible(true);
    setCurrentWorkout(workout);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsWorkoutsShowVisible(false);
  };

  useEffect(handleIndexWorkouts, []);

  return (
    <div>
      <div>
        <Form.Select
          aria-label="Default select example"
          onChange={(event) => console.log(event.target.value)}
          action="http://localhost:3000/workouts.${}json"
        >
          <option>Body Part</option>
          <option value="1">Arms</option>
          <option value="2">Legs</option>
          <option value="3">Core</option>
          <option value="4">Chest</option>
          <option value="5">Shoulder</option>
          <option value="6">Back</option>
        </Form.Select>
      </div>
      <WorkoutsIndex workouts={workouts} onShowWorkout={handleShowWorkout} />
      <Modal show={isWorkoutsShowVisible} onClose={handleClose}>
        <WorkoutsShow workout={currentWorkout} />{" "}
      </Modal>
    </div>
  );
}
