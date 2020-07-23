using Flock.Onboard.Application.Dtos;
using MediatR;

namespace Flock.Onboard.Application.Interactors.OnboardCompany
{
    public class OnboardCompanyCommand : IRequest<OnboardDto>
    {
        public string Title { get; set; }
        public string Project { get; set; }

    }
}
