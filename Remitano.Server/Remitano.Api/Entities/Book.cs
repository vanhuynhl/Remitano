using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Remitano.Api.Entities
{
    public class Book : BaseEntity
    {
        public Guid AuthorId { get; set; }
        public string Name { get; set; }
        public string ISBN { get; set; }
        public string Publisher { get; set; }
        public virtual Author Author { get; set; }
    }

    public class BookConfiguration : IEntityTypeConfiguration<Book>
    {
        public void Configure(EntityTypeBuilder<Book> builder)
        {
            builder.HasKey(t => t.Id);
            builder.Property(t => t.Name).IsRequired();
            builder.Property(t => t.ISBN).IsRequired();
            builder.Property(t => t.Publisher).IsRequired();
            builder.HasOne(e => e.Author).WithMany(e => e.Books).HasForeignKey(e => e.AuthorId);
        }
    }
}
