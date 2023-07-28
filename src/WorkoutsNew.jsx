import axios from "axios";
import { propTypes } from "react-bootstrap/esm/Image";

export function WorkoutsNew() {
  const handleCreateWorkout = (params) => {
    console.log("handleCreateWorkout", params);
    axios.post("http://localhost:3000/workouts", params).then((response) => {
      console.log(response);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateWorkout(params);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* User ID: <input name="user_id" type="text" /> */}
        Name: <input name="name" type="text" />
        img: <input name="img" type="text" />
        Body Group: <input name="body_group_id" type="text" />
        Muscle: <input name="muscle_group_id" type="text" />
      </div>
      <button type="submit">Add Workout</button>
    </form>
  );
}
