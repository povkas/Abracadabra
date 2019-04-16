using System.Security.Authentication;
using Eshop.DTOs.Users;
using Eshop.Models;
using Eshop.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using Eshop.ExceptionHandling;
using Microsoft.IdentityModel.JsonWebTokens;

namespace Eshop.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly IUserService _userService;
        private readonly ILogger _logger;

        public UsersController(IUserService userService, ILogger<UsersController> logger)
        {
            _userService = userService;
            _logger = logger;
        }

        [HttpPost]
        [Produces(typeof(NewUserDto))]
        public async Task<ActionResult> Create([FromBody] NewUserDto newUser)
        {
            if (!await _userService.CheckUserExistence(newUser))
            {
                throw new FailedToCreateUserException("This email is already taken");
            }

            var user = await _userService.CreateUser(newUser);
            return Created("user", user);
        }

        [HttpGet("{id}")]
        [Produces(typeof(UserDto))]
        public async Task<IActionResult> GetById(int id)
        {
            _logger.LogInformation("Getting user's {ID}", id);
            var user = await _userService.GetById(id);
            if (user == null)
            {
                throw new NotFoundCustomException("User with id "+ id +" was not found");
            }

            return Ok(user);
        }

        [HttpPost("{login}")]
        [Produces(typeof(JsonWebToken))]
        public async Task<ActionResult> CreateJwtToken([FromBody] LoginRequestDto user)
        {
            if (!await _userService.CheckIfUserExists(user))
            {
                throw new InvalidCredentialsException("Incorrect email or password");
            }

            return Created("jwt", TokenManager.GenerateToken(user.Email));
        }
    }
}