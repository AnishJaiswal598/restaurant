using System.ComponentModel.DataAnnotations.Schema;

namespace TastyBitesDotnet.Models.DatabaseModels
{
  public class TableBooking
  {
    [Column("id")]
    public Guid Id { get; set; }
    [Column("time")]
    public int Time { get; set; }
    [Column("date")]
    public int Date {  get; set; }
    [Column("tableid")]
    public Guid TableId { get; set; }
    public Diner Diner { get; set; }
    [Column("userid")]
    public Guid UserId { get; set; }
    public Users User { get; set; }
  }
}
