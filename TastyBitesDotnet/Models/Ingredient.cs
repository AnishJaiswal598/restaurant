using System.ComponentModel.DataAnnotations;

namespace TastyBitesDotnet.Models
{
  public class Ingredient
  {
    [Key]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; } = string.Empty;

    public ICollection<Dish>? Dishes { get; set; }
  }
}
