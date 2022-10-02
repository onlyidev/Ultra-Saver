using System.Security.Claims;

namespace Ultra_Saver;
static class ExtensionsService
{
    public static String? getEmailFromClaim(this ClaimsIdentity identity)
    {
        return identity.Claims.FirstOrDefault(o => o.Type == "email")?.Value;
    }

}