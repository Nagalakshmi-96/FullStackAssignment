using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using System.Web.Mvc;
using System.Web.Routing;
using NLog;


namespace FinalAssignment.Web.Filter
{

    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, Inherited = true, AllowMultiple = true)]
    public class APIAuthorizationAttribute:AuthorizationFilterAttribute
    {
        #region Logger
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();
        #endregion

        #region OnAuthorization
        public override void OnAuthorization(HttpActionContext actionContext)
        {
            logger.Info("Entering OnAuthorization Method");
            base.OnAuthorization(actionContext);

            if (HttpContext.Current.Session["userName"] != null)
            {
                return;
            }
            else
            {
                HandleUnauthorizedRequest(actionContext);
            }

        }
        #endregion

        #region Handle Un authorized Request
        private static void HandleUnauthorizedRequest(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            logger.Info("Entering HandleUnauthorizedRequest Method");
            actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Forbidden, "Invalid user credential.");
        } 
        #endregion
        
    }
}