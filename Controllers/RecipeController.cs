

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Ultra_Saver;

[ApiController]
[Route("[controller]")]
public class RecipeController : ControllerBase
{
    private readonly AppDatabaseContext _db;

    public RecipeController(AppDatabaseContext db)
    {
        _db = db;
    }

    [HttpGet]
    public IActionResult getRecipies()
    {
        // TODO get all recipies from database and return with pagination
        // TODO implement filter functionality (will use regex)
        return Ok("getRecipies");
    }

    [HttpPost]
    [Authorize]
    public IActionResult upsertRecipe(RecipeModel recipe)
    {
        // TODO check if exists and update or add new
        return Ok("upsertRecipe");
    }

    [HttpDelete]
    [Authorize]
    public IActionResult deleteRecipe(RecipeModel recipe)
    {
        // TODO remove from database
        return Ok("deleteRecipe");
    }

}