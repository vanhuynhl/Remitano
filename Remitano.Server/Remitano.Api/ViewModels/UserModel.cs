using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Remitano.Api.Entities;

namespace Remitano.Api.ViewModels;

public class UserModel
{
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
}

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<IdentityUser, UserModel>();
    }
}