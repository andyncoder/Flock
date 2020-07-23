using Flock.Media.Application.Dtos;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Flock.Media.Application.Interactors.GetContent
{
    public class GetContentQueryHandler : IRequestHandler<GetContentQuery, MediaContentDto>
    {
        public Task<MediaContentDto> Handle(GetContentQuery request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
