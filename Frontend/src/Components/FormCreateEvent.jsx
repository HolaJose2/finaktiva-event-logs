import React, { useState } from "react";
import { urlEventLogs } from "../utils/endpoints";

export function FormCreateEvent() {
  const [description, setDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const createEvent = async (newEvent) => {
    try {
      const response = await fetch(urlEventLogs, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Event-Origin": "FORMULARIO",
        },
        body: JSON.stringify(newEvent),
      });

      if (response.ok) {
        setMessage("¡Evento creado exitosamente!");
      } else {
        const error = await response.json();
        setMessage(error.message);
      }
    } catch (error) {
      setMessage("Error de red al crear el evento. Inténtelo de nuevo.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentDate = new Date().toISOString().split("T")[0];
    const formDate = new Date(eventDate).toISOString().split("T")[0];

    const errors = {};
    if (!description.trim()) {
      errors.description = "La descripción es requerida";
    }
    if (!eventDate.trim()) {
      errors.eventDate = "La fecha del evento es requerida";
    } else if (formDate > currentDate) {
      errors.eventDate =
        "La fecha del evento no puede ser posterior a la fecha actual";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const newEvent = {
      created: formDate,
      description: description,
      eventType: "FORMULARIO",
    };

    createEvent(newEvent);

    setErrors({});
    setDescription("");
    setEventDate("");
  };

  return (
    <div className="container p-4 mx-25">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">Crear Evento</h1>
        {message && (
          <div
            className={
              message.includes("Error")
                ? "alert alert-danger"
                : "alert alert-success"
            }
          >
            {message}
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descripción:
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          {errors.description && (
            <div className="text-danger">{errors.description}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="eventDate" className="form-label">
            Fecha del Evento:
          </label>
          <input
            type="date"
            className="form-control"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
          {errors.eventDate && (
            <div className="text-danger">{errors.eventDate}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="eventType" className="form-label">
            Tipo de Evento:
          </label>
          <select
            className="form-select"
            id="eventType"
            disabled
            value={"FORMULARIO"}
          >
            <option value="API">API</option>
            <option value="FORMULARIO">Formulario</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Crear Evento
        </button>
      </form>
    </div>
  );
}
