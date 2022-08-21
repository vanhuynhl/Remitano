using Microsoft.EntityFrameworkCore;
using Remitano.Api.Entities;

namespace Remitano.Api.DbContext
{
    public class RemitanoContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public RemitanoContext(DbContextOptions<RemitanoContext> options)
            : base(options)
        {
        }

        public DbSet<Author> Author { get; set; }
        public DbSet<Book> Book { get; set; }
    }
}