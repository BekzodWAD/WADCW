using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL_7519.Repositories
{
    public interface IRepository<T> where T : class
    {
        Task<List<T>> GetAllAsync();
        Task<T> FindAsync(int id);
        Task UpdateAsync(T entity);
        Task CreateAsync(T entity);
        Task DeleteAsync(int id);
        bool Exists(int id);
    }
}
