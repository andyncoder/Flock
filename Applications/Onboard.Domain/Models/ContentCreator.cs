
using System.Collections.Generic;

namespace Flock.Onboard.Domain.Models
{
    public class ContentCreator
    {
        public string Name { get; set; }
        public List<MediaChannel> MediaChannels { get; set; } = new List<MediaChannel>();
    }
}
