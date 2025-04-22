using System.ComponentModel.DataAnnotations;

namespace TastyBitesDotnet.Models
{
  public class DishDto
  {
    [Key]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; } = string.Empty;

    public int Price { get; set; }

    [Required]
    public string Image { get; set; } = string.Empty;

    public ICollection<Guid> IngredientId { get; set; }

    public Guid DishTypeId { get; set; }

  }
}
