using Flock.Onboard.Domain.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace Flock.Onboard.Infrastructure.MongoData
{
    public class Context 
    {
        private readonly IMongoDatabase _database = null;

        public Context(string connectionString, string databaseName)
        {
            var client = new MongoClient(connectionString);
            if (client != null)
                _database = client.GetDatabase(databaseName);
        }

        public IMongoCollection<Project> Projects
        {
            get { return _database.GetCollection<Project>("Project"); }
        }

        public IMongoCollection<Company> Companies
        {
            get { return _database.GetCollection<Company>("Company");  }
        }
    }
}
