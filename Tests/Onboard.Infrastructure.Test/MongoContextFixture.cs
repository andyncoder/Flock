using System;
using System.Collections.Generic;
using System.Text;

namespace Onboard.Infrastructure.Test
{
    public class MongoContextFixture : IDisposable
    {
        readonly string _conn = "mongodb://localhost:27017";
        readonly string _database = "Atlas";

        public readonly Flock.Onboard.Infrastructure.MongoData.Context Context;

        public MongoContextFixture()
        {
            Context = new Flock.Onboard.Infrastructure.MongoData.Context(_conn, _database);
        }

        public void Dispose()
        {
        }
    }

}
