using Microsoft.AspNetCore.Mvc;

namespace Ultra_Saver.Controllers;

[ApiController]
[Route("[controller]")]
public class SimpleDataTestController : ControllerBase
{

    private readonly SimpleDatabaseContext context;

    public SimpleDataTestController(SimpleDatabaseContext context)
    {
        this.context = context;
    }

    [HttpGet]
    public List<SimpleTestModel> getTable()
    {
        return this.context.SimpleTests.ToList();
    }

}