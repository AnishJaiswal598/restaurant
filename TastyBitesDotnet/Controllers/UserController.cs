using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TastyBitesDotnet.Data;
using TastyBitesDotnet.Models.DatabaseModels;

namespace TastyBitesDotnet.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UserController(ApplicationDbContext dbContext) : ControllerBase
  {
    private readonly ApplicationDbContext dbContext = dbContext;

    [HttpGet("{Id}")]
    public async Task<IActionResult> Get([FromRoute] Guid Id)
    {
      try {
        var user = await dbContext.Users.FirstOrDefaultAsync(u=>u.Id==Id);
        if(user == null)
        {
          return NotFound("User Not Found");
        }
        else
        {
          return Ok(user);
        }
      }
      catch(Exception ex) {
        return StatusCode(500, "An error occured while fetching user " + ex.Message);
      }
    }

    [HttpGet("allUsers")]
    public async Task<IActionResult> Get()
    {
      try {
        var users = await dbContext.Users.ToListAsync();
        return Ok(users);
      }
      catch(Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Users user)
    {
      try {
        user.Id= Guid.NewGuid();
        await dbContext.Users.AddAsync(user);
        await dbContext.SaveChangesAsync();
        return Ok(user);
      }
      catch(Exception ex) {
        return StatusCode(500, "An error occured while creating user " + ex.Message);
      }
    }
  }
}
