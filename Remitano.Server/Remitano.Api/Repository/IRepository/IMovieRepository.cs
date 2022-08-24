using Remitano.Api.Entities;

namespace Remitano.Api.Repository.IRepository;

public interface IMovieRepository : IBaseRepository<SharedMovieEntity>
{
    Task<IEnumerable<SharedMovieEntity>> GetAllWithUserAsync();
}