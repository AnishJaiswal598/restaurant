using System.ComponentModel.DataAnnotations;

namespace TastyBitesDotnet.Models.DatabaseModels
{
  public class Diner
  {
    [Key]
    public Guid Id { get; set; }

    public int DinerNo { get; set; }

    public int TotalSeats { get; set; }
  }
}
