using System.ComponentModel.DataAnnotations;

namespace TastyBitesDotnet.Models
{
  public class Dish
  {
    [Key]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; }=string.Empty;

    [Required]
    public int Price { get; set; }

    [Required]
    public string Image {  get; set; }= string.Empty;

    public ICollection<Ingredient> Ingredients { get; set; }

    public Guid DishTypeId {  get; set; }
    public DishType DishType { get; set; }

  }
}
