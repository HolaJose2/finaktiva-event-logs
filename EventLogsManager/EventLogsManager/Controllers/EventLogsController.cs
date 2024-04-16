using EventLogsManager.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventLogsManager.Controllers
{
    [ApiController]
    [Route("api/eventlogs")]
    public class EventLogsController : ControllerBase
    {
        private readonly EventLogsDBContext _context;

        public EventLogsController(EventLogsDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<EventLogs>>> Get()
        {
            return await _context.EventLogs.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<EventLogs>> Post([FromBody] EventLogs eventLog)
        {
            try
            {
                if (eventLog.Created == null || eventLog.Created == DateTime.MinValue)
                {
                    eventLog.Created = DateTime.UtcNow;
                }

                // Validación de fecha de creación
                if (eventLog.Created > DateTime.UtcNow)
                {
                    return BadRequest(new { Message = "Error - La fecha de creación no puede estar en el futuro." });
                }

                // Verificar si el tipo de evento es válido
                if (eventLog.EventType != "API" && eventLog.EventType != "FORMULARIO")
                {
                    return BadRequest(new { Message = "Error - Tipo de evento no válido. Debe ser 'API' o 'FORMULARIO'." });
                }

                //Validamos si el origen de la ejecucion es desde el formulario manual o no.
                string eventOrigin = HttpContext.Request.Headers["X-Event-Origin"];
                eventLog.EventType = eventOrigin ?? "API";


                _context.EventLogs.Add(eventLog);
                await _context.SaveChangesAsync();

                return Ok(eventLog);

            }
            catch (Exception ex)
            {
                // Manejo de excepciones y registro
                return StatusCode(500, $"Se produjo un error al procesar la solicitud. - {ex.Message}");
            }
        }
    }
}
