﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
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
        public DbSet<Book> Book { get; set; }
        public DbSet<UserEntity> User { get; set; }
    }
}