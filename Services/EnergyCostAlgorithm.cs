
namespace Ultra_Saver;

public class EnergyCostAlgorithm
{
    private static double totalEnergy = 0;
    private static double totalEnergyCost = 0;
    private static float costPerkWh = 0;

    // powerScale is a proportion of power used for the specified time; scales 1 to 10; ex.: medium heat, 3/10 of power
    private void electricPower (int appliancePower, short powerScale, int timeInMin){
        totalEnergy += appliancePower * powerScale * timeInMin / 60_000;
        totalEnergyCost = Math.Round (totalEnergy * costPerkWh, 2);
    }

    private double gasPower (int appliancePower, short powerScale, int timeInMin){
        return 0;
    }

    private double gasPowerCost (int appliancePower, short powerScale, int timeInMin, float costPerLitre){
        return 0;
    }

    // getters n setters:
    public double getTotalEnergy(){ return totalEnergy; }

    public double getTotalEnergyCost() { return totalEnergyCost ;}

    public void setCostPerkWh(float cost){ costPerkWh = cost; }
}