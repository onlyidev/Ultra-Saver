using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace UltraSaver;

public class UserPropsModel
{
    [Key]
    [EmailAddress]
    public string email { get; set; } = null!; // Not nullable

    public bool darkMode { get; set; } = false;
}