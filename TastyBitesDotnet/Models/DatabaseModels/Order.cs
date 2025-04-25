using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TastyBitesDotnet.Models.DatabaseModels
{
  [Table("orders")]
  public class Order
  {
    [Key]
    [Column("id")]
    public Guid OrderId { get; set; }
    [Column("date")]
    public DateTime CreatedDate { get; set; }
    [ForeignKey("userid")]
    public Users ?User { get; set; }
    public ICollection<OrderDish>? OrderDishes { get; set; } = new List<OrderDish>();
  }
}
