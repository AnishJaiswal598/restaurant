using System.ComponentModel.DataAnnotations;

namespace TastyBitesDotnet.Models.DatabaseModels
{
  public class Users
  {
    [Key]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; } = string.Empty;

    [Required]
    public string Email { get; set; } = string.Empty;
  }
}
