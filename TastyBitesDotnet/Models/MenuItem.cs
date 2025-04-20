using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TastyBitesDotnet.Models
{
  [Table("MenuItems")]
  public class MenuItem
  {
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(25)]
    public string Name { get; set; }

    [Required]
    public string IngredientsList { get; set; }

    [Required]
    public int Price {  get; set; }

    [Required]
    public string Image {  get; set; }

    [NotMapped]
    public List<string> Ingredients => IngredientsList?.Split(',').Select(s => s.Trim()).ToList() ?? new List<string>();
  }
}
