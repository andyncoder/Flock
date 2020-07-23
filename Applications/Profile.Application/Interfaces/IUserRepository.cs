using Flock.Profile.Domain.Models;
using System;

namespace Flock.Profile.Application.Interfaces
{
    public interface IUserRepository
    {
        Guid Register(User user);
    }
}
