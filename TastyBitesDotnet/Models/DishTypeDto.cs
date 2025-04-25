using System.ComponentModel.DataAnnotations;

namespace TastyBitesDotnet.Models
{
  public class DishTypeDto
  {
    [Key]
    public Guid Id { get; set; }

    [Required]
    public string Type { get; set; } = string.Empty;
  }
}

