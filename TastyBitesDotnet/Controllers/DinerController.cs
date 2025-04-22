using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TastyBitesDotnet.Data;
using TastyBitesDotnet.Models.DatabaseModels;

namespace TastyBitesDotnet.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class DinerController(ApplicationDbContext dbContext) : ControllerBase
  {
    private readonly ApplicationDbContext dbContext = dbContext;
    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var diners = await dbContext.Diners.ToListAsync();
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
        await dbContext.Diners.AddAsync(diner);
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
