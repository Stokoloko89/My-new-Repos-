import { useState } from "react";
import { nanoid } from "nanoid";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [query, setQuery] = useState("");
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const addPersonHandler = (e) => {
    e.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the Phonebook`);
      return;
    } else {
      const newPerson = {
        name: newName,
        number: newNum,
        id: nanoid(),
      };

      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNum("");
    }
  };

  const onChangeNameHandler = (e) => {
    setNewName(e.target.value);
  };

  const onChangeNumHandler = (e) => {
    setNewNum(e.target.value);
  };

  const getFilteredPersons = (query, persons) =>
    !query
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(query.toLowerCase())
        );

  const filteredPersons = getFilteredPersons(query, persons);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={(e) => setQuery(e.target.value)}></Filter>
      <PersonForm
        onSubmit={addPersonHandler}
        value={newName}
        onNameChange={onChangeNameHandler}
        input
        numValue={newNum}
        onNumChange={onChangeNumHandler}
      ></PersonForm>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons}> </Persons>
    </div>
  );
};

export default App;
