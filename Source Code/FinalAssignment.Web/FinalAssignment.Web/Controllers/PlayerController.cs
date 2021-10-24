using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;
using FinalAssignment.Web.Entities;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Configuration;
using System.Web;
using FinalAssignment.Web.Filter;
using NLog;
using System.IO;

namespace FinalAssignment.Web.Controllers
{

    [APIAuthorization]
    [RoutePrefix("api")]
    public class PlayerController : ApiController
    {

        #region Logger
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();
        #endregion

        #region Get MetaData        
        
        [HttpGet]
        [Route("getMetaData")]
        public async Task<HttpResponseMessage> GetMetaData()
        {
            using (var client = new HttpClient())
            {
                logger.Info("Entering into GetMetaData Method");
                HttpResponseMessage response = null;
                client.BaseAddress = new Uri(ConfigurationManager.AppSettings["WebAPIURL"]);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                try
                {
                    logger.Info("Calling WebAPI");
                    response = await client.GetAsync("api/getMetaData");
                    logger.Info("Response Recieved");

                }
                catch (Exception)
                {
                    logger.Error("Error While receiving data from GetMetaData method");
                    response = Request.CreateResponse(HttpStatusCode.ServiceUnavailable);
                }
                logger.Info("Exiting from GetMetaData Method");
                return response;
            }
            
        }
        #endregion

        #region GetPlayer List
        
        [HttpGet]
        [Route("getPlayers")]
        public async Task<HttpResponseMessage> GetPlayers()
        {
            using (var client = new HttpClient())
            {
                logger.Info("Entering into GetPlayers Method");
                HttpResponseMessage response = null;
                client.BaseAddress = new Uri(ConfigurationManager.AppSettings["WebAPIURL"]);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                try
                {
                    logger.Info("Calling WebAPI");
                    response = await client.GetAsync("api/getPlayers");
                    logger.Info("Response Received");
                }
                catch (Exception)
                {
                    logger.Error("Error While receiving data from GetPlayers method");
                    response = Request.CreateResponse(HttpStatusCode.ServiceUnavailable);
                }
                logger.Info("Exiting from GetPlayers Method");
                return response;
            }
        }
        #endregion

        #region Get Individual Player 
        
        [HttpGet]
        [Route("getPlayer/{id}")]
        public async Task<HttpResponseMessage> GetPlayer(int id)
        {
            using (var client = new HttpClient())
            {
                logger.Info("Entering into GetPlayer Method");
                HttpResponseMessage response = null;
                client.BaseAddress = new Uri(ConfigurationManager.AppSettings["WebAPIURL"]);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                try
                {
                    logger.Info("Calling WebAPI");
                    response = await client.GetAsync("api/getPlayer/" + id);
                    logger.Info("Response Received");
                }
                catch (Exception)
                {
                    logger.Error("Error in Get Individual Player Method");
                    response = Request.CreateResponse(HttpStatusCode.ServiceUnavailable);
                }
                logger.Info("Exiting from GetPlayer Method");
                return response;
            }
        }
        #endregion

        #region Update Player
        
        [HttpPut]
        [Route("updatePlayer/{id}")]
        public async Task<HttpResponseMessage> updatePlayer([FromBody]Player player, int id)
        {

            using (var client = new HttpClient())
            {
                logger.Info("Entering into updatePlayer Method");
                HttpResponseMessage response = null;
                var mycontent = JsonConvert.SerializeObject(player);
                HttpContent content = new StringContent(mycontent, System.Text.Encoding.UTF8, "application/json");
                client.BaseAddress = new Uri(ConfigurationManager.AppSettings["WebAPIURL"]);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                try
                {
                    logger.Info("Calling WebAPI");
                    response = await client.PutAsync("api/updatePlayer/" + id, content);
                    logger.Info("Response Received");
                }
                catch (Exception)
                {
                    logger.Error("Error in Update Player Method");
                    response = Request.CreateResponse(HttpStatusCode.ServiceUnavailable);
                }
                logger.Info("Exiting from updatePlayer Method");
                return response;
            }
        }
        #endregion Update Player

        #region DeletePlayer
        
        [HttpDelete]
        [Route("deletePlayer/{id}")]
        public async Task<HttpResponseMessage> delete(int id)
        {
            using (var client = new HttpClient())
            {
                logger.Info("Entering into deletePlayer Method");
                HttpResponseMessage response = null;
                client.BaseAddress = new Uri(ConfigurationManager.AppSettings["WebAPIURL"]);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                try
                {
                    logger.Info("Calling WebAPI");
                    response = await client.DeleteAsync("api/deletePlayer/" + id + "");
                    logger.Info("Response Received");
                }
                catch (Exception)
                {
                    logger.Error("Error in Delete Player Method");
                    response = Request.CreateResponse(HttpStatusCode.ServiceUnavailable);
                }
                logger.Info("Exiting from deletePlayer Method");
                return response;
            }
        }

        #endregion

        #region Add Player
        
        [HttpPost]
        [Route("addPlayer")]
        public async Task<HttpResponseMessage> addPlayer([FromBody]Player player)
        {
            using (var client = new HttpClient())
            {
                logger.Info("Entering into addPlayer Method");
                HttpResponseMessage response = null;
                var mycontent = JsonConvert.SerializeObject(player);
                HttpContent content = new StringContent(mycontent, System.Text.Encoding.UTF8, "application/json");
                client.BaseAddress = new Uri(ConfigurationManager.AppSettings["WebAPIURL"]);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                try
                {
                    logger.Info("Calling WebAPI");
                    response = await client.PostAsync("api/addPlayer", content);
                    logger.Info("Response Received");
                }
                catch (Exception)
                {
                    logger.Error("Error in Add Player Method");
                    response = Request.CreateResponse(HttpStatusCode.ServiceUnavailable);
                }
                logger.Info("Exiting from addPlayer Method");
                return response;
            }
        }
        #endregion

        #region Get User Authentication Details
        [HttpGet]
        [Route("authorizeUser")]
        public bool GetUserDetails(String UserName)
        {
            using (var client = new HttpClient())
            {
                logger.Info("Entering into authorizeUser Method");
                client.BaseAddress = new Uri(ConfigurationManager.AppSettings["WebAPIURL"]);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                 try
                {
                    logger.Info("Calling WebAPI");
                    HttpResponseMessage response = client.GetAsync("api/authorizeUser/" + UserName).Result;
                    logger.Info("Response Received");
                    logger.Info("Exiting from Authorize User Method");
                    if (response.IsSuccessStatusCode)
                    {
                        return true;

                    }
                    else
                    {
                        return false;
                    }
                }
                catch (Exception)
                {
                    logger.Error("Error in Authorize User Method");
                    return false;
                }
                
            }
        }
        #endregion

        

        [HttpPost]
        [Route("upload")]
        public async Task<HttpResponseMessage> upload(int projectId, int sectionId)
        {
            //var status = new MyReponse();
            try
            {
                var context = HttpContext.Current.Request;
                if (context.Files.Count > 0)
                {
                    //var filesReadToProvider = await Request.Content.ReadAsMultipartAsync();
                    //var index = 0;
                    //foreach (var streamContent in filesReadToProvider.Contents)
                    //{
                    //    var fileBytes = await streamContent.ReadAsByteArrayAsync();
                    //    var file = new File();
                    //    file.ProjectId = projectId;
                    //    file.SectionId = sectionId;
                    //    file.FileName = context.Files[index].FileName;
                    //    file.FileSize = fileBytes.Length;
                    //    file.ImagePath = String.Format("/UploadedFiles/{0}_{1}_{2}", projectId, sectionId, file.FileName);
                    //    file.ThumbPath = String.Format("/UploadedFiles/{0}_{1}_th_{2}", projectId, sectionId, file.FileName);
                    //    var img = Image.FromStream(new System.IO.MemoryStream(fileBytes));
                    //    await SaveFiles(file, img);
                    //    index++;
                    //}
                    //status.Status = true;
                    //status.Message = "File uploaded successfully";
                    //return Request.CreateResponse(HttpStatusCode.OK, status);
                }
            }
            catch (Exception ex)
            {
                //status.Message = ex.Message;
            }
            return Request.CreateResponse(HttpStatusCode.OK, 200);
        }

    }
}
