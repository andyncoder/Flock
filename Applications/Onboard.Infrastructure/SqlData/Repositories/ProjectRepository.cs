
using Flock.Onboard.Application.Interfaces;
using Flock.Onboard.Domain.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Onboard.Infrastructure.SqlData.Repositories
{
    public class ProjectRepository : IProjectRepository
    {
        public Task Add(Project project)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Project>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<Project> Get(string id)
        {
            throw new NotImplementedException();
        }
    }
}
