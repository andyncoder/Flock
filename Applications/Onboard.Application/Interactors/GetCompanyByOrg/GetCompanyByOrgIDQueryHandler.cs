using AutoMapper;
using Flock.Onboard.Application.Dtos;
using Flock.Onboard.Application.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Flock.Onboard.Application.Interactors.GetCompanyByOrg
{
    public class GetCompanyByOrgIDQueryHandler : IRequestHandler<GetCompanyByOrgIDQuery, CompanyDto>
    {
        private ICompanyRepository _companyRepository;
        private IMapper _mapper;

        public GetCompanyByOrgIDQueryHandler(
            ICompanyRepository companyRepository,
            IMapper mapper)
        {
            _companyRepository = companyRepository;
            _mapper = mapper;
        }


        public async Task<CompanyDto> Handle(GetCompanyByOrgIDQuery request, CancellationToken cancellationToken)
        {
            return await _companyRepository.Get(request.ID)
                                           .ContinueWith(r =>
                                           {
                                               return _mapper.Map<CompanyDto>(r);
                                           });
        }
    }
}
