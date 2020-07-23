using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Flock.Media.Application.Interactors.DeleteContent
{
    public class DeleteContentCommandHandler : IRequestHandler<DeleteContentCommand>
    {
        public Task<Unit> Handle(DeleteContentCommand request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
