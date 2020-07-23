using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Flock.Onboard.Application.Dtos;
using Flock.Onboard.Application.Interactors.GetCompanyByOrg;
using Flock.Onboard.Application.Interactors.OnboardCompany;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Atlas.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class OnboardController : ControllerBase
    {
        IMediator _mediator;

        public OnboardController(IMediator mediator)
        {
            this._mediator = mediator;
        }

        [Route("{id}/company")]
        [ProducesResponseType(typeof(CompanyDto), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [HttpGet]
        public async Task<ActionResult> GetCompany(string id)
        {
            try
            {
                var company = await _mediator.Send(new GetCompanyByOrgIDQuery { ID = id });
                return Ok(company);
            }
            catch
            {
                return NotFound();
            }
        }



        [Route("company")]
        [ProducesResponseType(typeof(OnboardDto), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [HttpPost]
        public async Task<ActionResult> OnboardCompany(OnboardCompanyCommand command)
        {
            try
            {
                var onboard = await _mediator.Send(command);
                return Ok(onboard);
            }
            catch
            {
                return NotFound();
            }
        }

        [Route("creator")]
        [ProducesResponseType(typeof(ContentCreatorDto), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [HttpPost]
        public async Task<ActionResult> OnboardCompany(OnboardContentCreatorCommand command)
        {
            try
            {
                var onboard = await _mediator.Send(command);
                return Ok(onboard);
            }
            catch
            {
                return NotFound();
            }
        }

    }
}