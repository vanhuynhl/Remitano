namespace Remitano.Api.Entities
{
    public class BaseEntity
    {
        public Guid Id { get; set; }
        public DateTimeOffset CreatedDate { get; set; } = DateTimeOffset.Now;
        public DateTimeOffset UpdatedDate { get; set; } = DateTimeOffset.Now;
    }
}
