using System.ComponentModel.DataAnnotations;

namespace TastyBitesDotnet.Models.DatabaseModels
{
  public class Ingredient
  {
    [Key]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; } = string.Empty;
  }
}
