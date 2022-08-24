using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Remitano.Api.Entities;

namespace Remitano.Api.DbContext
{
    public class RemitanoContext : IdentityDbContext
    {
        public RemitanoContext(DbContextOptions<RemitanoContext> options)
            : base(options)
        {
        }

        public DbSet<Author> Author { get; set; }
        public DbSet<SharedMovieEntity> SharedMovie { get; set; }
    }
}
