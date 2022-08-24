using AutoMapper;
using Remitano.Api.Entities;

namespace Remitano.Api.ViewModels.AutoMapperConfiguration
{
    public class MovieProfile : Profile
    {
        public MovieProfile()
        {
            CreateMap<SharedMovieModel, SharedMovieEntity>();
            CreateMap<SharedMovieEntity, SharedMovieModel>()
                .ForMember(dest => dest.User, opt => opt.Ignore())
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description))
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.Title))
                .ForMember(dest => dest.VideoId, opt => opt.MapFrom(src => src.VideoId))
                .ForMember(dest => dest.ShareBy, opt => opt.MapFrom(src => src.User.Email));
        }
    }
}
