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
        var tableBookings = await dbContext.TableBookings.Where(booking => booking.Date == Date).ToListAsync();
        return Ok(tableBookings);
      }
      catch(Exception ex) {
        return BadRequest(ex.Message);  
      }
    }

    [HttpGet("/byUser")]
    public async Task<IActionResult> Get([FromQuery] Guid Id)
    {
      try {
        var tableBookingsByUser = await dbContext.TableBookings.Where(booking=>booking.UserId == Id).ToListAsync();
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
          TableId = tableBookingDto.TableId,
          Date = tableBookingDto.Date,
          Time = tableBookingDto.Time,
          UserId = tableBookingDto.UserId,
        };
        await dbContext.TableBookings.AddAsync(newTableBooking);
        await dbContext.SaveChangesAsync();
        return Ok(newTableBooking);
      }
      catch(Exception ex) {
        return BadRequest(ex);
      } 
    }
  }
}
