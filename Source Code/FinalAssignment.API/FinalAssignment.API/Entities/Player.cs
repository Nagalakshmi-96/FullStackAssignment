using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalAssignment.API.Entities
{
    public class Player
    {
        public int PlayerID { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string preferredName { get; set; }
        public string gender { get; set; }
        public string dateOfBirth { get; set; }
        public string countryOfBirth { get; set; }
        public string townOfBirth { get; set; }
        public string nationalities { get; set; }
        public string nationalInsuranceNumber { get; set; }
        public string status { get; set; }
        public string registrationType { get; set; }
        public string registrationID { get; set; }
        public string registeringClub { get; set; }
        public string player { get; set; }
        public string registration { get; set; }
        public string transfer { get; set; }
        public string intermediaries { get; set; }
        public string ITC { get; set; }
        public string GBE { get; set; }
        public string createdDateTime { get; set; }
        
        public string submittedDateTime { get; set; }
        
        public string submittedBy { get; set; }
        public string lastUpdatedDateTime { get; set; }
        
        public string updatedBy { get; set; }

        public string systemUpdated { get; set; }
        public string assigneeShort { get; set; }
        public string assignee { get; set; }
        public string color { get; set; }
    
    }
}