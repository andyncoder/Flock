
using Flock.Onboard.Application.Interfaces;
using Flock.Onboard.Domain.Models;
using System;
using System.Threading.Tasks;

namespace Flock.Onboard.Infrastructure.SqlData.Repositories
{
    public class CompanyRepository : ICompanyRepository
    {
        public Task<Guid> Enroll(Company company)
        {
            throw new NotImplementedException();
        }

        public Task<Company> Get(string id)
        {
            throw new NotImplementedException();
        }
    }
}
