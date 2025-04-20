using Microsoft.EntityFrameworkCore;
using TastyBitesDotnet.Models;

namespace TastyBitesDotnet.Data
{
  public class ApplicationDbContext: DbContext
  {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {
       
    }
    public DbSet<MenuItem> MenuItems { get; set; } 

  }
}
