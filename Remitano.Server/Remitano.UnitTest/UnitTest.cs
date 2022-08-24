using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Remitano.Api.Controllers;
using Remitano.Api.Entities;
using Remitano.Api.Repository.IRepository;
using Remitano.Api.ViewModels;
using Remitano.Api.ViewModels.AutoMapperConfiguration;

namespace Remitano.UnitTest;

[TestClass]
public class UnitTest
{
    private readonly IMovieRepository _movieRepository;
    
    [TestMethod]
    public async Task TestMovieController()
    {
        var mockMovie = new Mock<IMovieRepository>();
        var mapper = ReturnMapperWithConfiguration(new MovieProfile());
        var mockUser = GetMockUserManager();
        var expectedTitle = "Title_1";
        IEnumerable<SharedMovieEntity> mockData = new List<SharedMovieEntity>()
        {
            new (){ Title = expectedTitle},
            new (), new ()
        };
        
        mockMovie.Setup(x => x.GetAllWithUserAsync()).Returns(Task.FromResult(mockData));

        var controller = new MovieController(mockUser.Object, mapper, mockMovie.Object);
        var response = await controller.GetAllMovies();
        Assert.IsNotNull(response);
        var expectedResult = (response as OkObjectResult).Value as IList<SharedMovieModel>;
        Assert.IsNotNull(expectedResult);
        Assert.AreEqual(3, expectedResult.Count);
        Assert.AreEqual(1, expectedResult.Where(x => x.Title == expectedTitle).ToList().Count);
    }
    
    private Mock<UserManager<IdentityUser>> GetMockUserManager()
    {
        var userStoreMock = new Mock<IUserStore<IdentityUser>>();
        return new Mock<UserManager<IdentityUser>>(
            userStoreMock.Object, null, null, null, null, null, null, null, null);
    }

    private IMapper ReturnMapperWithConfiguration(Profile profile)
    {
        var configuration = new MapperConfiguration(cfg => cfg.AddProfile(profile));
        IMapper mapper = new Mapper(configuration);
        return mapper;
    }
}
