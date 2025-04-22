using System.ComponentModel.DataAnnotations.Schema;
using TastyBitesDotnet.Models.DatabaseModels;

namespace TastyBitesDotnet.Models
{
  public class TableBookingDto
  {
    public Guid Id { get; set; }
    public int Time { get; set; }
    public int Date { get; set; }
    public Guid TableId { get; set; }
    public Guid UserId { get; set; }
  }
}
