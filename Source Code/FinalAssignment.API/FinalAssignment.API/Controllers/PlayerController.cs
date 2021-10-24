using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FinalAssignment.API.Entities;
using FinalAssignment.API.Models;
using System.Threading.Tasks;
using NLog;

namespace FinalAssignment.API.Controllers
{
    [RoutePrefix("api")]
    public class PlayerController : ApiController
    {
        #region Logger
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();
        #endregion

        #region Get Meta Data
        [HttpGet]
        [Route("getMetaData")]
        public HttpResponseMessage getMetaData()
        {
            logger.Info("Entering into getMetaData Method");
            HttpResponseMessage response = new HttpResponseMessage();
            PlayerModel playerModel = new PlayerModel();
            try
            {
                MetaData result = playerModel.getMetaData();
                response = Request.CreateResponse(HttpStatusCode.OK, result);
                
            }
            catch (Exception)
            {
                logger.Debug("Error in Gettign Meta Data Method");
                response = Request.CreateResponse(HttpStatusCode.InternalServerError);
            }
            logger.Error("Exiting from getMetaData Method");
            return response;

        }
        #endregion

        #region Get Player List
        [HttpGet]
        [Route("getPlayers")]
        public HttpResponseMessage GetPlayers()
        {
            logger.Info("Entering into GetPlayers Method");
            PlayerModel playerModel = new PlayerModel();
            HttpResponseMessage response = new HttpResponseMessage();
            try
            {
                List<Player> result = playerModel.GetPlayers(null);

                if (result.Count==0)
                    response = Request.CreateResponse(HttpStatusCode.NoContent);
                else
                    response = Request.CreateResponse(HttpStatusCode.OK,result);
            }
            catch (Exception)
            {
                logger.Error("Error in GetPlayers Method");
                response = Request.CreateResponse(HttpStatusCode.InternalServerError);
            }
            logger.Info("Exiting from GetPlayers Method");
            return response;

        }
        #endregion

        #region Get Player
        [HttpGet]
        [Route("getPlayer/{id}")]
        public HttpResponseMessage GetPlayer(int id)
        {
            logger.Info("Entering into GetPlayer Method");
            PlayerModel playerModel = new PlayerModel();
            HttpResponseMessage response = new HttpResponseMessage();
            try
            {
                List<Player> result = playerModel.GetPlayers(id);
                if (result.Count == 0)
                    response = Request.CreateResponse(HttpStatusCode.NoContent);
                else
                    response = Request.CreateResponse(HttpStatusCode.OK, result);
            }
            catch (Exception)
            {
                logger.Error("Error in GetPlayer Method"); 
                response = Request.CreateResponse(HttpStatusCode.InternalServerError);
            }
            logger.Info("Exiting from GetPlayer Method");
            return response;

        }
        #endregion

        #region Update Player
        [HttpPut]
        [Route("updatePlayer/{id}")]
        public HttpResponseMessage updatePlayer([FromBody]Player player, int id)
        {
            logger.Info("Entering into Update Player Method");
            int result;
            PlayerModel playerModel = new PlayerModel();
            HttpResponseMessage response = new HttpResponseMessage();
            try
            {
                result = playerModel.updatePlayers(player, id);
                response = Request.CreateResponse(HttpStatusCode.OK,result);
            }
            catch (Exception)
            {
                logger.Error("Error in Update Player Method");
                response = Request.CreateResponse(HttpStatusCode.InternalServerError);
            }
            logger.Info("Exiting from Update Player Method");
            return response;

        }
        #endregion

        #region Delete Player
        [HttpDelete]
        [Route("deletePlayer/{id}")]
        public HttpResponseMessage deletePlayer(int id)
        {
            logger.Info("Entering into Delete Player Method");
            PlayerModel playerModel = new PlayerModel();
            HttpResponseMessage response = new HttpResponseMessage();
            try
            {
                int result = playerModel.deletePlayer(id);
                response = Request.CreateResponse(HttpStatusCode.OK,result);
            }
            catch (Exception)
            {
                logger.Error("Error in Delete Player Method");
                response = Request.CreateResponse(HttpStatusCode.InternalServerError);
            }
            logger.Info("Exiting from Delete Player Method");
            return response;

        }
        #endregion Delete Player

        #region Add Player
        [HttpPost]
        [Route("addPlayer")]
        public HttpResponseMessage addPlayer([FromBody]Player player)
        {
            logger.Info("Entering into Add Player Method");
            PlayerModel playerModel = new PlayerModel();
            HttpResponseMessage response = new HttpResponseMessage();
            try
            {
                int result = playerModel.addPlayer(player);
                response = Request.CreateResponse(HttpStatusCode.Created,result);
            }
            catch (Exception)
            {
                logger.Error("Error in Add Player Method");
                response = Request.CreateResponse(HttpStatusCode.InternalServerError);
            }
            logger.Info("Exiting from Add Player Method");
            return response;

        }
        #endregion

        #region Authorize User
        [HttpGet]
        [Route("authorizeUser/{name}")]
        public HttpResponseMessage AuthorizeUser(string name)
        {
            logger.Info("Entering into Authorize User Method");
            PlayerModel playerModel = new PlayerModel();

            HttpResponseMessage response = new HttpResponseMessage();
            try
            {
                int result = playerModel.authorizeUser(name);
                if (result== 0)
                    response = Request.CreateResponse(HttpStatusCode.NotFound);
                else
                    response = Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception)
            {
                logger.Error("Error in Authorize User Method");
                response = Request.CreateResponse(HttpStatusCode.InternalServerError);
            }
            logger.Info("Exiting from Authorize User Method");
            return response;

        }
        #endregion
    }
}
