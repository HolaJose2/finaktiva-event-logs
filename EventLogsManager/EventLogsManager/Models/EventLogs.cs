using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EventLogsManager.Models
{
    public class EventLogs
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "La fecha de creación es requerida.")]
        public DateTime Created { get; set; }

        [Required(ErrorMessage = "La descripción es requerida.")]
        public string Description { get; set; }

        [Required(ErrorMessage = "El tipo de evento es requerido.")]
        public string EventType { get; set; }
    }

}
