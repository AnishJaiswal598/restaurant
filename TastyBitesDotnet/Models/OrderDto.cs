namespace TastyBitesDotnet.Models
{
  public class OrderDto
  {
    public Guid UserId { get; set; }
    public ICollection<OrderItemDto> OrderItemDtos { get; set; } = new List<OrderItemDto>();
  }
}
