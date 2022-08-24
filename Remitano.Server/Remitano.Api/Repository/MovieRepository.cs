using Microsoft.EntityFrameworkCore;
using Remitano.Api.DbContext;
using Remitano.Api.Entities;
using Remitano.Api.Repository.IRepository;

namespace Remitano.Api.Repository;

public class MovieRepository : BaseRepository<SharedMovieEntity>, IMovieRepository
{
    public MovieRepository(RemitanoContext context) : base(context)
    {
    }
    
    public async Task<IEnumerable<SharedMovieEntity>> GetAllWithUserAsync()
    {
        return await _context.Set<SharedMovieEntity>().Include(x => x.User).ToListAsync();
    }
}