import Course from "./Components/Course";
import { nanoid } from "nanoid";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: nanoid(),
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: nanoid(),
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: nanoid(),
        },
        {
          name: "State of a component",
          exercises: 14,
          id: nanoid(),
        },
        {
          name: "Redux",
          exercises: 11,
          id: nanoid(),
        },
      ],
    },
    {
      name: "Node.js",
      id: nanoid(),
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: nanoid(),
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: nanoid(),
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {courses.map((course) => (
        <Course key={course.id} courses={course}></Course>
      ))}
    </div>
  );
};
export default App;
