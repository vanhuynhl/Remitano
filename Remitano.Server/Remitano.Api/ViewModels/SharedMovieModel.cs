using Microsoft.AspNetCore.Identity;

namespace Remitano.Api.ViewModels;

public class SharedMovieModel
{
    public IdentityUser? User { get; set; }
    public string VideoId { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string ShareBy { get; set; } = string.Empty;
}
