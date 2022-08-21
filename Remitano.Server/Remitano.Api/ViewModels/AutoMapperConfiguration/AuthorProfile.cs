using AutoMapper;
using Remitano.Api.Entities;

namespace Remitano.Api.ViewModels.AutoMapperConfiguration
{
    public class AuthorProfile : Profile
    {
        public AuthorProfile()
        {
            CreateMap<Author, AuthorDto>();
        }
    }
}
