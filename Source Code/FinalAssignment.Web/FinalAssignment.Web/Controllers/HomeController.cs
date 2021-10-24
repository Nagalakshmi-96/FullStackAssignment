using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FinalAssignment.Web.Filter;

namespace FinalAssignment.Web.Controllers
{
    public class HomeController : Controller
    {
        [UserAuthorization]
        public ActionResult Index()
        {
            return View();
        }

        
        public ActionResult Unauthorized()
        {
            return View();
        }

    }
}