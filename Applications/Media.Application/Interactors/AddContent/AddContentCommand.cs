using Flock.Media.Application.Dtos;
using MediatR;

namespace Flock.Media.Application.Interactors.AddContent
{
    public class AddContentCommand : IRequest<MediaContentDto>
    {
    }
}
