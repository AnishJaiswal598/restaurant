using System.ComponentModel.DataAnnotations;

namespace TastyBitesDotnet.Models
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
