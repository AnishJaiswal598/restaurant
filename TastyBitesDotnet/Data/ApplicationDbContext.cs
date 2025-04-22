using Microsoft.EntityFrameworkCore;
using TastyBitesDotnet.Models.DatabaseModels;

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
    public DbSet<TableBooking> TableBookings { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      base.OnModelCreating(modelBuilder);
      modelBuilder.Entity<Users>().HasIndex(u => u.Email).IsUnique();

      modelBuilder.Entity<Dish>()
        .HasMany(i => i.Ingredients)
        .WithMany()
        .UsingEntity(j => j.ToTable("DishIngredients"));
    }
  }
}
