using EventLogsManager.Models;
using Microsoft.EntityFrameworkCore;

namespace EventLogsManager
{
    public class EventLogsDBContext : DbContext
    {
        public EventLogsDBContext(DbContextOptions<EventLogsDBContext> options) : base(options) { }

        public DbSet<EventLogs> EventLogs { get; set; }
    }
}
