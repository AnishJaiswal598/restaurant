using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TastyBitesDotnet.Models.DatabaseModels
{
  public class TableBooking
  {
    [Key]
    [Column("id")]
    public Guid Id { get; set; }
    [Column("time")]
    public int Time { get; set; }
    [Column("date")]
    public int Date {  get; set; }
    [Column("tableid")]
    [ForeignKey("tableid")]
    public Diner Diner { get; set; }
    [Column("userid")]
    [ForeignKey("userid")]
    public Users User { get; set; }
  }
}
