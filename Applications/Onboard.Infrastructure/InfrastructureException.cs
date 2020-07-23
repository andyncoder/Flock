using System;
using System.Collections.Generic;
using System.Text;

namespace Flock.Onboard.Infrastructure
{
    public class InfrastructureException : Exception
    {
        internal InfrastructureException(string businessMessage)
               : base(businessMessage)
        {
        }
    }
}
