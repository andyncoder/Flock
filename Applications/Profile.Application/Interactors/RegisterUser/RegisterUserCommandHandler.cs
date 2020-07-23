using Flock.Profile.Application.Dtos;
using Flock.Profile.Application.Interactors;
using Flock.Profile.Application.Interfaces;
using Flock.Profile.Domain.Models;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Profile.Application.Commands
{
    public class RegisterUserCommandHandler : IRequestHandler<RegisterUserCommand, UserDto>
    {
        private readonly IUserRepository _userRepository;

        public RegisterUserCommandHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public Task<UserDto> Handle(RegisterUserCommand request, CancellationToken cancellationToken)
        {
            Guid id = _userRepository.Register(new User { });
            return Task.FromResult(new UserDto
            {
                 UserID = id
            });
        }
    }
}
