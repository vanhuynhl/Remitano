using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Remitano.Api.Entities;

public class SharedMovieEntity : BaseEntity
{
    public IdentityUser User { get; set; }
    public string VideoId { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
}

public class SharedMovieConfiguration : IEntityTypeConfiguration<SharedMovieEntity>
{
    public void Configure(EntityTypeBuilder<SharedMovieEntity> builder)
    {
        builder.HasKey(t => t.Id);
        builder.Property(t => t.VideoId).IsRequired();
        builder.Property(t => t.Title).IsRequired();
        builder.Property(t => t.Description).IsRequired();
        builder.HasOne(x => x.User);
    }
}