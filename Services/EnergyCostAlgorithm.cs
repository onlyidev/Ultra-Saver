
namespace Ultra_Saver;

public class EnergyCostAlgorithm
{
    public double totalEnergy { get; set; } = 0;
    public double totalEnergyCost { get; set;} = 0;
    private float costPerkWh = 0;

    // powerScale is a proportion of power used for the specified time; scales 1 to 10; ex.: medium heat, 3/10 of power
    private void ElectricPower (int appliancePower, short powerScale, int timeInMin){
        totalEnergy += appliancePower * powerScale * timeInMin / 600_000;
        totalEnergyCost = Math.Round (totalEnergy * costPerkWh, 2);
    }

    private double GasPower (int appliancePower, short powerScale, int timeInMin){
        return 0;
    }

    private double GasPowerCost (int appliancePower, short powerScale, int timeInMin, float costPerLitre){
        return 0;
    }

    public void SetCostPerkWh(float cost){ costPerkWh = cost; }
}