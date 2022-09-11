using Microsoft.AspNetCore.Mvc;

namespace Ultra_Saver.Controllers;

[ApiController]
[Route("[controller]")]
public class HelloBackController : ControllerBase
{
    [HttpGet]
    public string GetHelloBack()
    {
        return "Hello, World!";
    }
}
