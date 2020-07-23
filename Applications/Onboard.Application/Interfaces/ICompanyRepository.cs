
using Flock.Onboard.Domain.Models;
using System;
using System.Threading.Tasks;

namespace Flock.Onboard.Application.Interfaces
{
    public interface ICompanyRepository
    {
        Task<Guid> Enroll(Company company);
        Task<Company> Get(string id);
    }
}
