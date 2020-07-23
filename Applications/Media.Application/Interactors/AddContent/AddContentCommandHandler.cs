using Flock.Media.Application.Dtos;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Flock.Media.Application.Interactors.AddContent
{
    public class AddContentCommandHandler : IRequestHandler<AddContentCommand, MediaContentDto>
    {
        public Task<MediaContentDto> Handle(AddContentCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
