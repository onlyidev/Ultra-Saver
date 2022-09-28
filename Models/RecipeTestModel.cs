using System.ComponentModel.DataAnnotations;

namespace Ultra_Saver;
public class RecipeTestModel {
    public int Id {get;set;}

    [Required]
    public int Minutes {get;set;}
    public int Wattage {get;set;}
}