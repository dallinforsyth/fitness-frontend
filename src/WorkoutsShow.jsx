export function WorkoutsShow(props) {
  return (
    <div>
      <h1>workout information</h1>
      <p>Name: {props.workout.name}</p>
      <p>Img: {props.workout.img}</p>
    </div>
  );
}
