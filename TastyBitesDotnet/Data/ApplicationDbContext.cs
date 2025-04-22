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
    public DbSet<Dish> Dishes { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      base.OnModelCreating(modelBuilder);
      modelBuilder.Entity<Users>().HasIndex(u => u.Email).IsUnique();

      modelBuilder.Entity<Dish>()
        .HasOne(d => d.DishType)
        .WithMany(dt => dt.Dishes)
        .HasForeignKey(d => d.DishTypeId);

      modelBuilder.Entity<Dish>()
        .HasMany(i => i.Ingredients)
        .WithMany(d => d.Dishes)
        .UsingEntity(j => j.ToTable("DishIngredient"));
    }
  }
}
