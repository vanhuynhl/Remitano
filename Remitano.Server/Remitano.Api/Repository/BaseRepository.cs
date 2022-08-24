using Microsoft.EntityFrameworkCore;
using Remitano.Api.DbContext;
using Remitano.Api.Entities;
using Remitano.Api.Repository.IRepository;
using System.Linq.Expressions;

namespace Remitano.Api.Repository
{
    public class BaseRepository<T> : IBaseRepository<T> where T : BaseEntity
    {
        protected readonly RemitanoContext _context;
        protected readonly DbSet<T> _entity;

        public BaseRepository(RemitanoContext context)
        {
            _context = context;
            _entity = context.Set<T>();
        }

        public void Delete(T entity)
        {
            if(entity == null)
                throw new ArgumentNullException(nameof(entity));

            _entity.Remove(entity);
        }

        public async Task<T> FindByConditionAsync(Expression<Func<T, bool>> predicate)
        {
            return await _context.Set<T>().FirstOrDefaultAsync(predicate);
        }

        public async Task<IEnumerable<T>> GetAllAsync() => await _entity.ToListAsync();

        public async Task<T> GetByIdAsync(Guid id) => await _entity.FirstOrDefaultAsync(x => x.Id == id);

        public async Task InsertAsync(T entity) => await _entity.AddAsync(entity);

        public async Task<bool> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync().ConfigureAwait(false) > 0;
        }

        public void Update(T entity)
        {
            if (entity == null)
                throw new ArgumentNullException(nameof(entity));
            
            _entity.Update(entity);
        }
    }
}
