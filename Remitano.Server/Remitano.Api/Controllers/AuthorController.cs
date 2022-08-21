using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Remitano.Api.Entities;
using Remitano.Api.Repository.IRepository;
using Remitano.Api.ViewModels;

namespace Remitano.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        private readonly IBaseRepository<Author> _authorRepo;
        public readonly IMapper _mapper;
        public AuthorController(IBaseRepository<Author> authorRepo, IMapper mapper)
        {
            _authorRepo = authorRepo;
            _mapper = mapper;
        }

        [HttpGet]
        [Authorize]
        [Route("GetAll")]
        public async Task<ActionResult<IEnumerable<Author>>> GetAllCustomers()
        {
            var authors = await _authorRepo.GetAllAsync();
            return Ok(_mapper.Map<List<AuthorDto>>(authors));
        }

        [HttpGet]
        [Route("GetCustomerById/{customerId}")]
        public async Task<ActionResult<Author>> GetCustomerById(Guid customerId)
        {
            return Ok(await _authorRepo.GetByIdAsync(customerId));
        }

        [HttpPost]
        [Route("AddCustomer")]
        [AllowAnonymous]
        public async Task<IActionResult> AddCustomer([FromBody] Author customer)
        {
            await _authorRepo.InsertAsync(customer);

            return Ok(await _authorRepo.SaveChangesAsync());
        }
    }
}
