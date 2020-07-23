using System;
using System.Net;
using System.Threading.Tasks;
using Flock.Media.Application.Dtos;
using Flock.Media.Application.Interactors.AddContent;
using Flock.Media.Application.Interactors.GetContent;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Flock.Atlas.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class MediaController : ControllerBase
    {

        IMediator _mediator;

        public MediaController(IMediator mediator)
        {
            this._mediator = mediator;
        }

        [Route("{id}")]
        [ProducesResponseType(typeof(MediaContentDto), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        public async Task<ActionResult> Get(Guid id)
        {
            try
            {
                var media = await _mediator.Send(new GetContentQuery { Id = id });
                return Ok(media);
            }
            catch
            {
                return NotFound();
            }
        }

        
        [Route("content")]
        [HttpPost]
        public async Task<ActionResult<MediaContentDto>> Post(AddContentCommand command)
        {
            var result  = await _mediator.Send(command);

            if (result == null)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}
