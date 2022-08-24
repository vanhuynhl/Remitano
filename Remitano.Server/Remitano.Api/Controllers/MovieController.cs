using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Remitano.Api.Entities;
using Remitano.Api.Repository.IRepository;
using Remitano.Api.ViewModels;

namespace Remitano.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class MovieController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IMapper _mapper;
        private readonly IMovieRepository _movieRepository;

        public MovieController(UserManager<IdentityUser> userManager, IMapper mapper, IMovieRepository movieRepository)
        {
            _userManager = userManager;
            _mapper = mapper;
            _movieRepository = movieRepository;
        }
        
        [HttpGet("getAll")]
        public async Task<IActionResult> GetAllMovies()
        {
            //Skip pagination for now
            try
            {
                var movieList = await _movieRepository.GetAllWithUserAsync();
                return Ok(_mapper.Map<IList<SharedMovieModel>>(movieList));
            }
            catch (Exception exxx)
            {
                Console.WriteLine(exxx);
                throw;
            }
        }
        
        [HttpPost("Share")]
        public async Task<IActionResult> ShareMovie(SharedMovieModel model)
        {
            var user = await _userManager.GetUserAsync(User);
            model.User = user;
            await _movieRepository.InsertAsync(_mapper.Map<SharedMovieEntity>(model));
            var canSave = await _movieRepository.SaveChangesAsync();
            return Ok(canSave);
        }
    }
}
