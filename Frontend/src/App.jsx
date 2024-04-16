import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { EventList } from "./Components/EventList";
import { FormCreateEvent } from "./Components/FormCreateEvent";
import { Menu } from "./utils/Menu";
function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Navigate to={"/eventlogs"} />} />

          <Route path="/eventlogs" element={<EventList />} />

          <Route path="/eventlogs/create" element={<FormCreateEvent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
