import React from "react";

const PersonCard = ({ person, onDelete, onEdit }) => {
return (
    <div className="col-md-4 mb-3">
    <div className="card">
        <div className="card-body">
        <h5 className="card-title">{person.name}</h5>
        <p className="card-text">Edad: {person.age}</p>
        <button
            className="btn btn-warning me-2"
            onClick={() => onEdit(person)}
        >
            Editar
        </button>
        <button
            className="btn btn-danger"
            onClick={() => onDelete(person.id)}
        >
            Eliminar
        </button>
        </div>
    </div>
    </div>
);
};

export default PersonCard;
