using Autofac;
using Flock.Onboard.Application.Interactors.GetCompanyByOrg;
using MediatR.Extensions.Autofac.DependencyInjection;

namespace Flock.Atlas.Api
{
    public class Module : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            //// mediator itself
            builder.AddMediatR(typeof(GetCompanyByOrgIDQuery).Assembly);

            //
            // Register all Types in Atlas.WebApi
            //
            builder.RegisterAssemblyTypes(typeof(Startup).Assembly)
                .AsSelf()
                .InstancePerLifetimeScope();
        }
    }
}
