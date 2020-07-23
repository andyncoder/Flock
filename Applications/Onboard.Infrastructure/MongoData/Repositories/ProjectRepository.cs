
using Flock.Onboard.Application.Interfaces;
using Flock.Onboard.Domain.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Flock.Onboard.Infrastructure.MongoData.Repositories
{
    public class ProjectRepository : IProjectRepository
    {
        private readonly Context _context = null;

        public ProjectRepository(Context context)
        {
            _context = context;
        }

        public async Task Add(Project project)
        {
            try
            {
                await _context.Projects.InsertOneAsync(project);
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        public async Task<IEnumerable<Project>> GetAll()
        {
            try
            {
                return await _context.Projects
                        .Find(_ => true).ToListAsync();
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }

        public async Task<Project> Get(string id)
        {
            try
            {
                ObjectId internalId = GetInternalId(id);
                return await _context.Projects
                                .Find(project => project.Id == id)
                                //|| note.InternalId == internalId)
                                .FirstOrDefaultAsync();
            }
            catch (Exception ex)
            {
                // log or manage the exception
                throw ex;
            }
        }


        private ObjectId GetInternalId(string id)
        {
            ObjectId internalId;
            if (!ObjectId.TryParse(id, out internalId))
                internalId = ObjectId.Empty;

            return internalId;
        }
    }
}
