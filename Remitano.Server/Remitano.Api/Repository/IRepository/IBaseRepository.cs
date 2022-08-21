using Remitano.Api.Entities;
using System.Linq.Expressions;

namespace Remitano.Api.Repository.IRepository
{
    public interface IBaseRepository<T> where T : BaseEntity
    {
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetByIdAsync(Guid id);
        Task InsertAsync(T entity);
        void Update(T entity);
        void Delete(T entity);
        Task<bool> SaveChangesAsync();
        Task<T> FindByConditionAsync(Expression<Func<T, bool>> predicate);
    }
}
