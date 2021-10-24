using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http.Filters;
using System.Web.Http.Controllers;
using System.Web;
using Newtonsoft.Json;
using System.Web.Routing;
using FinalAssignment.Web.Controllers;
using System.Web.Mvc;
using NLog;
using System.DirectoryServices;

namespace FinalAssignment.Web.Filter
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method,Inherited =true, AllowMultiple = true)]
    public class UserAuthorizationAttribute : AuthorizeAttribute
    {
        #region Logger
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();
        #endregion

        #region AuthorizeCore
        protected override bool AuthorizeCore(HttpContextBase httpcontext)
        {
            logger.Info("Entering AuthorizeCore Method");
            string CurrentUsername = httpcontext.User.Identity.Name;
            string UserName = CurrentUsername.Substring(10);
            PlayerController playerCont = new PlayerController();
            if (UserName == HttpContext.Current.Session["UserName"] as string)
            {
                return true;
            }
            else if (playerCont.GetUserDetails(UserName))
            {
                HttpContext httpCurrent = HttpContext.Current;
                httpCurrent.Session["UserName"] = UserName;  
                return true;
            }
            else
            {
                return false;
            }
        }
        #endregion AuthorizeCore

        #region OnAuthorization       
        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            logger.Info("Entering OnAuthorization Method");
            if (!AuthorizeCore(filterContext.HttpContext))
            {
                logger.Info("Redirecting to Unquthorized Page");
                filterContext.Result = new ViewResult
                {
                    ViewName = "~/Views/Home/Unauthorized.cshtml"
                };
            }
            
        }
        #endregion OnAuthorization

    }
}
