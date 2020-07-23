using Flock.Onboard.Application.Dtos;
using Flock.Onboard.Application.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Flock.Onboard.Application.Interactors.OnboardCompany
{
    public class OnboardContentCreatorCommandHandler : IRequestHandler<OnboardContentCreatorCommand, ContentCreatorDto>
    {
        private ICompanyRepository _companyRepository;
        private IProjectRepository _projectRepository;

        public OnboardContentCreatorCommandHandler(
            IProjectRepository projectRepository,
            ICompanyRepository companyRepository)
        {
            _projectRepository = projectRepository;
            _companyRepository = companyRepository;
        }

        public Task<ContentCreatorDto> Handle(OnboardContentCreatorCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
