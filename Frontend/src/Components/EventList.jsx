import { useState, useEffect } from "react";
import { FormatDate } from "../utils/FormatDate";
import { urlEventLogs } from "../utils/endpoints";

export function EventList() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eventType, setEventType] = useState("");

  useEffect(() => {
    // Lógica para cargar eventos
    const fetchEvents = async () => {
      // Realizar la solicitud GET para obtener todos los eventos
      const response = await fetch(urlEventLogs);
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    // Filtrar eventos cuando los filtros cambian
    const filtered = events.filter((event) => {
      // Obtener la fecha local del input
      const localStartDate = new Date(`${startDate}T00:00:00`);
      const localEndDate = new Date(`${endDate}T23:59:59`);

      // Convertir la fecha de creación del evento a un objeto Date
      const eventDate = new Date(event.created);

      // Comparar las fechas considerando la zona horaria
      if (startDate && localStartDate > eventDate) {
        return false;
      }

      if (endDate && localEndDate < eventDate) {
        return false;
      }

      if (eventType && event.eventType !== eventType) {
        return false;
      }

      return true;
    });

    setFilteredEvents(filtered);
  }, [events, startDate, endDate, eventType]);

  return (
    <div className="container p-4">
      <h3 className="text-center m-4">EventLogs</h3>
      {/* Controles de filtro */}
      <section className="d-flex gap-4 align-items-center justify-content-center w-100 flex-wrap">
        <div className="d-flex gap-2">
          <label htmlFor="startDate">Fecha de Inicio:</label>
          <input
            className={`form-control ${
              startDate > endDate && endDate ? "invalid" : ""
            }`}
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="d-flex gap-2">
          <label htmlFor="endDate">Fecha de Fin:</label>
          <input
            className="form-control"
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="d-flex gap-2">
          <label htmlFor="eventType">Tipo de Evento:</label>
          <select
            className="form-control"
            id="eventType"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="API">API</option>
            <option value="FORMULARIO">Formulario</option>
          </select>
        </div>
      </section>

      {/* Tabla de eventos */}
      <div className="list table-responsive">
        <table className="table table-bordered mt-5">
          <thead className="table-dark">
            <tr>
              <th>Id</th>
              <th>Descripcion</th>
              <th>Fecha</th>
              <th>Tipo de evento</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event) => {
              const formatedDate = FormatDate(event.created);
              return (
                <tr key={event.id}>
                  <td>{event.id}</td>
                  <td>{event.description}</td>
                  <td>{formatedDate}</td>
                  <td>{event.eventType}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
