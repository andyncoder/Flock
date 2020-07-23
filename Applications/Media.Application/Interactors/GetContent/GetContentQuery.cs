
using Flock.Media.Application.Dtos;
using MediatR;
using System;

namespace Flock.Media.Application.Interactors.GetContent
{
    public class GetContentQuery : IRequest<MediaContentDto>
    {
        public Guid Id { get; set; }
    }
}
