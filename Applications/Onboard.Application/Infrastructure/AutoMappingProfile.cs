using AutoMapper;
using Flock.Onboard.Application.Dtos;
using Flock.Onboard.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Flock.Onboard.Application.Infrastructure
{
    public class AutoMappingProfile : Profile
    {
        public AutoMappingProfile()
        {
            // Add as many of these lines as you need to map your objects
            CreateMap<Company, CompanyDto>();
        }
    }
}
