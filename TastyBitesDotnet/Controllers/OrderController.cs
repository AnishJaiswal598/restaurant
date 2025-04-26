using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TastyBitesDotnet.Data;
using TastyBitesDotnet.Models;
using TastyBitesDotnet.Models.DatabaseModels;

namespace TastyBitesDotnet.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class OrderController(ApplicationDbContext dbContext) : ControllerBase
  {
    private readonly ApplicationDbContext dbContext = dbContext;

    [HttpGet("{OrderId}")]
    public async Task<IActionResult> Get([FromRoute] Guid OrderId)
    {
      try
      {
        var orders = await dbContext.Orders.Include(o => o.User).Include(o => o.OrderDishes).ThenInclude(od => od.Dish).Where(o => o.OrderId == OrderId).ToListAsync();
        return Ok(orders);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    [HttpGet()]
    public async Task<IActionResult> GetByUser([FromQuery] Guid UserId)
    {
      try {
        var orders = await dbContext.Orders.Include(o=>o.User).Include(o => o.OrderDishes).ThenInclude(od=>od.Dish).Where(o=>o.User.Id == UserId).ToListAsync();
        return Ok(orders);
      }
      catch(Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] OrderDto orderDto)
    {
      try
      {
        var user = await dbContext.Users.FirstOrDefaultAsync(user => user.Id == orderDto.UserId);
        if (user == null)
        {
          return BadRequest("User " + orderDto.UserId + " is Not found");
        }
        var newOrder = new Order
        {
          OrderId = Guid.NewGuid(),
          User = user,
          OrderDishes = new List<OrderDish>(),
        };

        foreach(var order in orderDto.OrderItemDtos)
        {
          var dish = await dbContext.Dishes.FirstOrDefaultAsync(dish => dish.DishId == order.DishId);
          if (dish == null)
          {
            return BadRequest("Dish with Id " + order.DishId + " does not exist");
          }
          var orderDish = new OrderDish
          {
            Dish = dish,
            DishQuantity = order.Quantity
          };
          newOrder.OrderDishes.Add(orderDish);
        }

        await dbContext.Orders.AddAsync(newOrder);
        await dbContext.SaveChangesAsync();
        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }
  }
}
