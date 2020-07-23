using System;

namespace Flock.Onboard.Domain.Models
{
    public class Project
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Fee Fee { get; set; }
    }
}
