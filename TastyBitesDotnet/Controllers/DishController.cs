using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TastyBitesDotnet.Data;
using TastyBitesDotnet.Models;

namespace TastyBitesDotnet.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class DishController(ApplicationDbContext dbContext) : ControllerBase
  {
    private readonly ApplicationDbContext dbContext = dbContext;

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] DishDto dish)
    {
      try {
        var dishType = await dbContext.DishTypes.FindAsync(dish.DishTypeId);

        if (dishType == null)
        {
          return NotFound(dish.DishTypeId + "does not match ");
        }

        var newDish = new Dish{
          Id = Guid.NewGuid(),
          DishType = dishType,
          DishTypeId = dish.DishTypeId,
          Image = dish.Image,
          Ingredients = new List<Ingredient>(),
          Name = dish.Name,
          Price = dish.Price
        };

        foreach(var Id in dish.IngredientId)
        {
          var ingredient = await dbContext.Ingredients.FindAsync(Id);
          if (ingredient == null)
          {
            return BadRequest(Id + " is not a valid ingredient ID");
          }
          newDish.Ingredients.Add(ingredient);
        }

        await dbContext.Dishes.AddAsync(newDish);
        await dbContext.SaveChangesAsync();

        return Ok(newDish);

      }
      catch (Exception ex){
          return BadRequest(ex.Message);  
      }
    }
  }
}
