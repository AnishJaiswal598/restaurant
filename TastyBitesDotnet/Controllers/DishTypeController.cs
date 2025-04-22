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
  public class DishTypeController(ApplicationDbContext context) : ControllerBase
  {
    private readonly ApplicationDbContext dbContext = context;


    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var dishTypes = await dbContext.DishTypes.ToListAsync();
        return Ok(dishTypes);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);  
      }
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] DishTypeDto dishType)
    {
      try {
        var newDishType = new DishType
        {
          Id = Guid.NewGuid(),
          Type = dishType.Type,
        };
        await dbContext.DishTypes.AddAsync(newDishType);
        await dbContext.SaveChangesAsync();
        return Ok("Dish " + dishType.Type + " added Successfully");
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }
  }
}
