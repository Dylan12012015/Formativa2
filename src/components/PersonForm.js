import React, { useState, useEffect } from "react";

const PersonForm = ({ onAdd, onUpdate, editingPerson }) => {
const [formData, setFormData] = useState({ name: "", age: "" });

useEffect(() => {
    if (editingPerson) {
    setFormData(editingPerson);
    } else {
    setFormData({ name: "", age: "" });
    }
}, [editingPerson]);

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPerson) {
    onUpdate(formData);
    } else {
    onAdd(formData);
    }
    setFormData({ name: "", age: "" });
};

return (
    <form onSubmit={handleSubmit} className="mb-4">
    <div className="form-group">
        <label>Nombre</label>
        <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="form-control"
        required
        />
    </div>
    <div className="form-group">
        <label>Edad</label>
        <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        className="form-control"
        required
        />
    </div>
    <button type="submit" className="btn btn-primary mt-2">
        {editingPerson ? "Actualizar" : "Agregar"}
    </button>
    </form>
);
};

export default PersonForm;
