using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Ultra_Saver.Controllers;

[ApiController]
[Route("[controller]")]
public class UserInfoController : ControllerBase
{
    private readonly AppDatabaseContext db;

    public UserInfoController(AppDatabaseContext db)
    {
        // Use dependency injection to get access to the database
        this.db = db;
    }

    [HttpGet]
    [Authorize] // This ensures that only the connections that pass a valid JWT token in the authentication header get here
    public IActionResult GetUserInfo()
    {
        var email = (HttpContext.User.Identity as ClaimsIdentity).Claims.FirstOrDefault(o => o.Type == "email")?.Value; // Get email from the JWT

        var res = this.db.properties.Find(email); // Try to find users properties here

        if (res == null)
        {
            // If this user logged in for the first time - we call a service that initializes a new user in the database
            NewUserInitService.init(db, email);
            res = this.db.properties.Find(email);
        }

        return Ok(res);
    }
}