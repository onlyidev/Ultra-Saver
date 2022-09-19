using System.ComponentModel.DataAnnotations;

namespace Ultra_Saver;
public class SimpleTestModel {
    public int Id {get;set;}

    [Required]
    public String message {get;set;}
}