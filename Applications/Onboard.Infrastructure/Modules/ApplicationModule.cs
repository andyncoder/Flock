using Autofac;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;

namespace Flock.Onboard.Application.Infrastructure
{
    public class ApplicationModule : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(typeof(ApplicationException).Assembly)
              .AsImplementedInterfaces()
              .InstancePerLifetimeScope();
        }
    }
}
