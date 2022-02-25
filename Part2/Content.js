import Part from "./Part";

function Content({ courseParts }) {
  return (
    <div>
      {courseParts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises}></Part>
      ))}
    </div>
  );
}

export default Content;
