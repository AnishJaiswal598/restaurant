using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TastyBitesDotnet.Data;
using TastyBitesDotnet.Models;

namespace TastyBitesDotnet.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class MenuController(ApplicationDbContext dbContext) : ControllerBase
  {
    private readonly ApplicationDbContext dbContext = dbContext;

    [HttpGet]
    public IActionResult Get()
    {
      try
      {
        var menuItems = dbContext.MenuItems.ToList();
        return Ok(menuItems);
      }catch(Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    [HttpPost]
    public IActionResult Post([FromBody] MenuItem menuItem)
    {
      try {
        dbContext.MenuItems.Add(menuItem);
        dbContext.SaveChanges();
        return Created();
       }
      catch(Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }
  }
}
