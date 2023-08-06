import axios from "axios";
import { propTypes } from "react-bootstrap/esm/Image";
import Form from "react-bootstrap/Form";

export function WorkoutsNew() {
  const handleCreateWorkout = (params) => {
    console.log("handleCreateWorkout", params);
    axios.post("http://localhost:3000/workouts", params).then((response) => {
      console.log(response);
    });
  };

  const handleSubmit = (event) => {
    debugger;
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateWorkout(params);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* User ID: <input ndame="user_id" type="text" /> */}
        Name: <input name="name" type="text" />
        img: <input name="img" type="text" />
        <Form.Select aria-label="Default select example" multiple>
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <button type="submit">Add Workout</button>
    </form>
  );
}
