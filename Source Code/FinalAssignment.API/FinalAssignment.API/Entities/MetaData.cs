using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalAssignment.API.Entities
{
    public class MetaData
    {
        public List<Assignees> Assignee;
        public List<string> status;
        public List<string> registration_type;
        public List<string> registering_club;
        public List<string> section_status;
        public List<string> section_status_name;
    }
}