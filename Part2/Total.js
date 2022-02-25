function Total(props) {
  const totalExercises = props.exercises.reduce(
    (total, exercise) => total + exercise.exercises,
    0
  );

  return (
    <p>
      <b>Total course exercises is : {totalExercises}</b>
    </p>
  );
}

export default Total;
