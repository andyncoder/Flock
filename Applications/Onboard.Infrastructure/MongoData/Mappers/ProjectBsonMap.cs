using Flock.Onboard.Domain.Models;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.IdGenerators;

namespace Flock.Onboard.Infrastructure.MongoData.Mappers
{
    public class ProjectMap
    {
        public void Map()
        {
            BsonClassMap.RegisterClassMap<Project>(map =>
            {
                map.AutoMap();
                map.SetIgnoreExtraElements(true);
                map.MapIdMember(x => x.Id).SetIdGenerator(CombGuidGenerator.Instance);
                map.MapMember(x => x.Title).SetIsRequired(true);
                map.MapMember(x => x.Description);
            });
        }
    }
}
