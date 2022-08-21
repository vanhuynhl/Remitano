using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Remitano.Api.Entities
{
    public class UserEntity : BaseEntity
    {
        public string DisplayName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }

    public class UserConfiguration : IEntityTypeConfiguration<UserEntity>
    {
        public void Configure(EntityTypeBuilder<UserEntity> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.UserName).IsRequired();
            builder.Property(x => x.Password).IsRequired();
        }
    }
}
