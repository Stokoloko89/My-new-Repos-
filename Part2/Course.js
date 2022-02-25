import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

function Course(props) {
  const { name, parts } = props.courses;

  return (
    <div>
      <Header courseTitle={name}></Header>
      <Content courseParts={parts}></Content>
      <Total exercises={props.courses.parts}></Total>
    </div>
  );
}

export default Course;
