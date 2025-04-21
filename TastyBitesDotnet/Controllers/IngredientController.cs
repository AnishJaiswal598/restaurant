using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TastyBitesDotnet.Data;
using TastyBitesDotnet.Models;

namespace TastyBitesDotnet.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class IngredientController(ApplicationDbContext dbContext) : ControllerBase
  {
    private readonly ApplicationDbContext dbContext = dbContext;

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try {
        var ingredients = await dbContext.Ingredients.ToListAsync();
        return Ok(ingredients);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Ingredient ingredient)
    {
      try {
        ingredient.Id = Guid.NewGuid();
        await dbContext.Ingredients.AddAsync(ingredient);
        await dbContext.SaveChangesAsync();
        return Ok(ingredient);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }
  }
}
