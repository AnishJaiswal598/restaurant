using System.ComponentModel.DataAnnotations;

namespace TastyBitesDotnet.Models.DatabaseModels
{
  public class Dish
  {
    [Key]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; } = string.Empty;

    public int Price { get; set; }

    [Required]
    public string Image { get; set; } = string.Empty;

    public ICollection<Ingredient> Ingredients { get; set; }

    public DishType DishType { get; set; }

  }
}
