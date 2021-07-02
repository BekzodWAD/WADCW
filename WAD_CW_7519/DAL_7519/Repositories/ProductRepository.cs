using DAL_7519.DBO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL_7519.Repositories
{
    public class ProductRepository : IRepository<Product>
    {
        private readonly StoreDbcontext _context;
        public ProductRepository(StoreDbcontext context)
        {
            _context = context;
        }
        public async Task CreateAsync(Product entity)
        {
            _context.Products.Add(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var product = await _context.Products.FindAsync(id);

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
        }

        public bool Exists(int id)
        {
            return _context.Products.Any(e => e.ProductId == id);
        }

        public async Task<Product> FindAsync(int id)
        {
            var product = await _context.Products.FindAsync(id);

            return product;
        }

        public async Task<List<Product>> GetAllAsync()
        {
            return await _context.Products.Include(p => p.Category).ToListAsync();
        }

        public async Task UpdateAsync(Product product)
        {
            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
        }
    }
}
