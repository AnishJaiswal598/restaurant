using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using TastyBitesDotnet.Models.DatabaseModels;

namespace TastyBitesDotnet.Models
{
  public class OrderDishOutputDto
  {
    public Dish Dish { get; set; }
    public int DishQuantity { get; set; }
  }
}
