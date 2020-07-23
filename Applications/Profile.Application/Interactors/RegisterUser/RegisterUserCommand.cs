using Flock.Profile.Application.Dtos;
using MediatR;

namespace Flock.Profile.Application.Interactors
{
    public class RegisterUserCommand : IRequest<UserDto>
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
