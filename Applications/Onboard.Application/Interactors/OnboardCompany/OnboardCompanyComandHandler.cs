using Flock.Onboard.Application.Dtos;
using Flock.Onboard.Application.Interfaces;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Flock.Onboard.Application.Interactors.OnboardCompany
{ 
    public class OnboardCompanyComandHandler : IRequestHandler<OnboardContentCreatorCommand, ContentCreatorDto>
    {
        public OnboardCompanyComandHandler(
            IProjectRepository project, 
            ICompanyRepository company)
        {

        }

        public Task<ContentCreatorDto> Handle(OnboardContentCreatorCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
