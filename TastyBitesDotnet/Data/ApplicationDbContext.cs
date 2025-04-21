using Microsoft.EntityFrameworkCore;
using TastyBitesDotnet.Models;

namespace TastyBitesDotnet.Data
{
  public class ApplicationDbContext: DbContext
  {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {
       
    }
    public DbSet<Diner> Diners { get; set; }
    public DbSet<Users> Users { get; set; }
    public DbSet<Ingredient> Ingredients { get; set; }
    public DbSet<DishType> DishTypes { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      base.OnModelCreating(modelBuilder);
      modelBuilder.Entity<Users>().HasIndex(u => u.Email).IsUnique();
    }
  }
}
