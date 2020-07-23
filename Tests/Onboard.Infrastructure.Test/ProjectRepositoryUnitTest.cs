using Flock.Onboard.Application.Interfaces;
using Flock.Onboard.Domain.Models;
using Flock.Onboard.Infrastructure.MongoData.Mappers;
using Flock.Onboard.Infrastructure.MongoData.Repositories;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.IdGenerators;
using MongoDB.Bson.Serialization.Serializers;
using System;
using Xunit;

namespace Onboard.Infrastructure.Test
{
    public class ProjectRepositoryUnitTest :
        IClassFixture<MongoContextFixture>
    {
        private MongoContextFixture _mongoFixture;
        private readonly IProjectRepository _projectRepository;

        public ProjectRepositoryUnitTest(MongoContextFixture mongoFixture)
        {
            this._mongoFixture = mongoFixture;
            _projectRepository = new ProjectRepository(mongoFixture.Context);

            DefineClassMaps();
        }

        [Fact]
        public void GetProjectTest()
        {
            var id = "12345";

            var project = _projectRepository.Get(id).Result;

            Assert.True(String.IsNullOrEmpty(project.Title), "Project should eixsts");
        }

        [Fact]
        public void AddProjectTest()
        {
            Project project = Create("Starbucks Wildy Chill", "Tropical Dragonfruit");
            _projectRepository.Add(project);

        }

        private static Project Create(string title, string description)
        {
            return new Project
            {
                StartDate = DateTime.Today,
                EndDate = DateTime.MaxValue,
                Title = "Starbucks Wildy Chill",
                Description = "Tropical Dragonfruit",
            };
        }


        private static void DefineClassMaps()
        {
            if (!BsonClassMap.IsClassMapRegistered(typeof(Project)))
            {
                BsonClassMap.RegisterClassMap<Project>(p =>
                {
                    p.AutoMap();

                    // explict version
                    p.MapProperty(c => c.Id)
                     .SetIdGenerator(StringObjectIdGenerator.Instance)
                     .SetSerializer(new StringSerializer(BsonType.ObjectId));

                    // short version
                    //p.IdMemberMap.SetSerializer(new StringSerializer(BsonType.ObjectId));

                    p.GetMemberMap(c => c.StartDate).SetSerializer(new DateTimeSerializer(true));
                    p.GetMemberMap(c => c.EndDate).SetSerializer(new DateTimeSerializer(true));

                    p.UnmapMember(c => c.Fee);

                });
            }
        }


    }
}
