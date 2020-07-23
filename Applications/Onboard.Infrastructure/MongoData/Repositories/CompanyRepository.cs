
using Flock.Onboard.Application.Interfaces;
using Flock.Onboard.Domain.Models;
using System;
using System.Threading.Tasks;

namespace Flock.Onboard.Infrastructure.MongoData.Repositories
{
    public class CompanyRepository : ICompanyRepository
    {
        #region Ctrs

        private readonly Context _context = null;

        public CompanyRepository(Context context)
        {
            _context = context;
        }

        #endregion

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
