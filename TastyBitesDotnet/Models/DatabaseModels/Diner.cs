using System.ComponentModel.DataAnnotations;

namespace TastyBitesDotnet.Models.DatabaseModels
{
  public class Diner
  {
    [Key]
    public Guid Id { get; set; }

    [Required]
    public int DinerNo { get; set; }

    [Required]
    public int TotalSeats { get; set; }
  }
}
