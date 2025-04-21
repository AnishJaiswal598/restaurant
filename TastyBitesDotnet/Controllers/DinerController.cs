using Microsoft.AspNetCore.Mvc;
using TastyBitesDotnet.Data;
using TastyBitesDotnet.Models;

namespace TastyBitesDotnet.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class DinerController(ApplicationDbContext dbContext) : ControllerBase
  {
    private readonly ApplicationDbContext dbContext = dbContext;
    [HttpGet]
    public IActionResult Get()
    {
      try
      {
        var diners = dbContext.Diner.ToList();
        return Ok(diners);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Diner diner)
    {
      try
      {
        diner.Id = Guid.NewGuid();
        dbContext.Diner.Add(diner);
        await dbContext.SaveChangesAsync();
        return Ok("Diner added successfully");
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }
  }
}
