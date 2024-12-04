import React, { useState } from "react";
import PersonForm from "./components/PersonForm";
import PersonCard from "./components/PersonCard";

const App = () => {
  const [people, setPeople] = useState([]);
  const [editingPerson, setEditingPerson] = useState(null);

  const addPerson = (person) => {
    setPeople([...people, { id: Date.now(), ...person }]);
  };

  const updatePerson = (updatedPerson) => {
    setPeople(
      people.map((person) =>
        person.id === updatedPerson.id ? updatedPerson : person
      )
    );
    setEditingPerson(null);
  };

  const deletePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const editPerson = (person) => {
    setEditingPerson(person);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">CRUD de Personas</h1>
      <PersonForm
        onAdd={addPerson}
        onUpdate={updatePerson}
        editingPerson={editingPerson}
      />
      <div className="row mt-4">
        {people.map((person) => (
          <PersonCard
            key={person.id}
            person={person}
            onDelete={deletePerson}
            onEdit={editPerson}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
