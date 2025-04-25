using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TastyBitesDotnet.Models.DatabaseModels
{
  public class Dish
  {
    [Key]
    [Column("Id")]
    public Guid DishId { get; set; }

    [Required]
    public string Name { get; set; } = string.Empty;

    public int Price { get; set; }

    [Required]
    public string Image { get; set; } = string.Empty;

    public ICollection<Ingredient>? Ingredients { get; set; }

    public DishType? DishType { get; set; }
  }
}
