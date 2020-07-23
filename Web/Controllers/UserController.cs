using System.Threading.Tasks;

using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Flock.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMediator _mediator;

        public UserController(IMediator mediator)
        {
            _mediator = mediator;
        }

        //[HttpGet]
        //[Route("{id}")]
        //public async Task<User> Get(int id)
        //{
        //   return await _mediator.Send(new GetUserQuery { UserID = id });
        //}


        //[Route("register")]
        //[HttpPost]
        //public async void Register(RegisterUserCommand command)
        //{
        //     await _mediator.Send(command);
        //}
    }
}