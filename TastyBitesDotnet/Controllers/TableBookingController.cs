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
  public class TableBookingController(ApplicationDbContext dbContext) : ControllerBase
  {
    private readonly ApplicationDbContext dbContext = dbContext;

    [HttpGet]
    public async Task<IActionResult> Get([FromQuery] int Date)
    {
      try {
        var tableBookings = await dbContext.TableBookings.Include(t => t.Diner).Include(t => t.User).Where(booking => booking.Date == Date).ToListAsync();
        return Ok(tableBookings);
      }
      catch (Exception ex) {
        return BadRequest(ex.Message);
      }
    }

    [HttpGet("{Id}")]
    public async Task<IActionResult> Get([FromRoute] Guid Id)
    {
      try {
        var tableBookingsByUser = await dbContext.TableBookings.Include(t=>t.User.Id==Id).ToListAsync();
        return Ok(tableBookingsByUser);
      }
      catch (Exception ex) {
        return BadRequest(ex.Message);
      }
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] TableBookingDto tableBookingDto)
    {
      try {
        tableBookingDto.Id = Guid.NewGuid();
        var user = await dbContext.Users.FirstOrDefaultAsync(user=>user.Id == tableBookingDto.UserId);
        if(user == null)
        {
          return BadRequest("User with Id "+tableBookingDto.UserId+" Does not exist");
        }

        var table = await dbContext.Diners.FirstOrDefaultAsync(table=>table.Id == tableBookingDto.TableId);

        if(table == null)
        {
          return BadRequest("Table with Id " + tableBookingDto.TableId + " Does not exist");
        }

        var newTableBooking = new TableBooking
        {
          Id = Guid.NewGuid(),
          Date = tableBookingDto.Date,
          Time = tableBookingDto.Time,
          User = user,
          Diner = table
        };
        await dbContext.TableBookings.AddAsync(newTableBooking);
        await dbContext.SaveChangesAsync();
        return Ok("New Table added successfuly");
      }
      catch(Exception ex) {
        return BadRequest(ex);
      } 
    }
  }
}
