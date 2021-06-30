using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL_7519.DBO
{
    public class StoreDbcontext : DbContext
    {
        public StoreDbcontext(DbContextOptions<StoreDbcontext> options) : base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get;set; }
    }
}
