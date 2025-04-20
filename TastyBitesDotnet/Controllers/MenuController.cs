using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TastyBitesDotnet.Data;

namespace TastyBitesDotnet.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class MenuController(ApplicationDbContext dbContext) : ControllerBase
  {
    private readonly ApplicationDbContext dbContext = dbContext;

    [HttpGet]
    public IActionResult getAllMenuItems()
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
  }
}
