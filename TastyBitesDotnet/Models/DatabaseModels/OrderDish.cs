using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace TastyBitesDotnet.Models.DatabaseModels
{
  [Table("orderdish")]
  [PrimaryKey(nameof(Order.OrderId), nameof(Dish.DishId))]
  public class OrderDish
  {
    public Order Order { get; set; }
    public Dish ?Dish { get; set; }
    [Column("dishquantity")]
    public int DishQuantity { get; set; }
  }
}
