using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using TastyBitesDotnet.Models.DatabaseModels;

namespace TastyBitesDotnet.Models
{
  public class OrderOutputDto
  {
    public Guid OrderId { get; set; }
    public DateTime CreatedDate { get; set; }
    public Users? User { get; set; }
    public ICollection<OrderDishOutputDto>? OrderDishes { get; set; } = new List<OrderDishOutputDto>();

  }
}
