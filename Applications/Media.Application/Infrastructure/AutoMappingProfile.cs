using AutoMapper;
using Flock.Media.Application.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace Flock.Media.Application.Infrastructure
{
    public class AutoMappingProfile : Profile
    {
        public AutoMappingProfile()
        {
            // Add as many of these lines as you need to map your objects
            CreateMap<Flock.Media.Domain.Models.Media, MediaContentDto>();
        }
    }
}
