
using Flock.Onboard.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Flock.Onboard.Application.Interfaces
{
    public interface IProjectRepository
    {
        Task Add(Project project);
        Task<Project> Get(string id);
        Task<IEnumerable<Project>> GetAll();
    }
}
