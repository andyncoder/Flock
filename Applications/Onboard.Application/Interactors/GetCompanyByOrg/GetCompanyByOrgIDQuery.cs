using Flock.Onboard.Application.Dtos;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Flock.Onboard.Application.Interactors.GetCompanyByOrg
{
    public class GetCompanyByOrgIDQuery : IRequest<CompanyDto>
    {
        public string ID { get; set; }
    }
}
