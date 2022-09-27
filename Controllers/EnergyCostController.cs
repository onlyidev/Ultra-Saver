using Microsoft.AspNetCore.Mvc;

namespace Ultra_Saver.Controllers;

[ApiController]
[Route("[controller]")]
public class EnergyCostController : ControllerBase
{
    private readonly SimpleDatabaseContext _db;

    public EnergyCostController(SimpleDatabaseContext db)
    {
        _db = db;
    }

    [HttpGet]
    public float CalculateEnergyCost()
    {
        var id = 1; 

        return CalculateKiloWattHours(60, 2000);
    }

    private float CalculateKiloWattHours(int minutes, int wattage) // returns kWh of recipe
    {
        float kw = wattage / 1000;
        float hours = minutes / 60;

        return kw / hours; 
    }
}
