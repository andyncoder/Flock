using Flock.Onboard.Application.Dtos;
using MediatR;

namespace Flock.Onboard.Application.Interactors.OnboardCompany
{
    public class OnboardContentCreatorCommand : IRequest<ContentCreatorDto>
    {
        public string Title { get; set; }
        public string Project { get; set; }
    }
}
