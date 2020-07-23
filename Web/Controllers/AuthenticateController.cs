using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Flock.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        private readonly IMediator _mediator;

        public AuthenticateController(IMediator mediator)
        {
            this._mediator = mediator;
        }

        //[HttpPost]
        //[AllowAnonymous]
        //public async Task<IActionResult> Login(LoginCommand command)
        //{
        //    var result = await _mediator.Send(command);
        //    if (!result.IsSuccess)
        //    {
        //        //if (result.IsLockout)
        //        //    return Redirect("/lockout");
        //        ModelState.AddModelError("UserName", "Invalid login attempt.");
        //        return BadRequest(ModelState);

        //    }
        //    //if (result.Need2FA)
        //    //{
        //    //    return RedirectToAction("/loginWith2fa");
        //    //}
        //    return Ok();
        //}

    }
}