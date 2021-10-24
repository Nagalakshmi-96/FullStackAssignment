using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FinalAssignment.API.Entities;
using FinalAssignment.API.DAL.Repository;
using Dapper;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using NLog;

namespace FinalAssignment.API.DAL.Persistence
{
    public class PlayerRepository:IPlayer
    {
        #region Logger
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();
        #endregion

        #region get Meta Data
        public MetaData getMetaData()
        {
            logger.Info("Entering into Player Repository getMetaData Method");
            MetaData MetaList = new MetaData();
            using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                try
                {
                    var result = connection.QueryMultiple(sql: "[SatheshRangasamy].[USP_GetMetaData]", param: null, commandType: CommandType.StoredProcedure);
                    List<Assignees> a = result.Read<Assignees>().ToList();
                    List<string> status = result.Read<string>().ToList();
                    List<string> registration_type = result.Read<string>().ToList();
                    List<string> registering_club = result.Read<string>().ToList();
                    List<string> section_status = result.Read<string>().ToList();
                    List<string> section_status_name = result.Read<string>().ToList();

                    MetaList.Assignee = a;
                    MetaList.status = status;
                    MetaList.registration_type = registration_type;
                    MetaList.registering_club = registering_club;
                    MetaList.section_status = section_status;
                    MetaList.section_status_name = section_status_name;
                }
                catch (Exception)
                {
                    logger.Error("Error in Player Repository getMetaData Method");
                    throw;
                }
                
            }
            return MetaList;
        }
        #endregion 

        #region getPlayers
        public List<Player> GetPlayers(int? id)
        {
            logger.Info("Entering into Player Repository GetPlayers Method");
            List<Player> PlayerList=null;
            using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                DynamicParameters param = new DynamicParameters();
                param.Add("@id", id);
                try
                {
                    var result = connection.QueryMultiple(sql: "[SatheshRangasamy].[USP_getUserList]", param: param, commandType: CommandType.StoredProcedure);

                    PlayerList = result.Read<Player>(buffered: true).ToList<Player>();
                }
                catch (Exception)
                {
                    logger.Error("Error in Player Repository GetPlayers Method");
                    throw;
                }        
            }
           return PlayerList;
        }
        #endregion 

        #region Update Players
        public int updatePlayers(Player player,int id)
        {
            logger.Info("Entering into Player Repository updatePlayers Method");
            int res=1;
            using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                DynamicParameters param = new DynamicParameters();
                param.Add("@id", id);
                param.Add("@firstName", player.firstName);
                param.Add("@lastName", player.lastName);
                param.Add("@preferredName", player.preferredName);
                param.Add("@gender", player.gender);
                param.Add("@dateOfBirth", player.dateOfBirth);
                param.Add("@countryOfBirth", player.countryOfBirth);
                param.Add("@townOfBirth", player.townOfBirth);
                param.Add("@nationalities", player.nationalities);
                param.Add("@nationalInsuranceNumber", player.nationalInsuranceNumber);
                param.Add("@assignee", player.assignee);
                param.Add("@assigneeShort", player.assigneeShort);
                param.Add("@color", player.color);
                param.Add("@updatedBy", player.updatedBy);
                try
                {
                    var result = connection.Execute(sql: "[SatheshRangasamy].[USP_updatePlayer]", param: param, commandType: CommandType.StoredProcedure);
                    return res;
                }
                catch (Exception)
                {
                    logger.Error("Error in Player Repository updatePlayers Method");
                    throw;
                }               
            }
            
        }
        #endregion

        #region Delete Player
        public int deletePlayer(int id)
        {
            logger.Info("Entering into Player Repository deletePlayer Method");
            int res = 1;
            using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                DynamicParameters param = new DynamicParameters();
                param.Add("@id", id);
                try
                {
                    var result = connection.Query(sql: "[SatheshRangasamy].[USP_deletePlayer]", param: param, commandType: CommandType.StoredProcedure);
                    return res;
                }
                catch (Exception)
                {
                    logger.Error("Error in Player Repository deletePlayer Method");
                    throw;
                }
                
            }
            
        }
        #endregion 
        
        #region Add Player
        public int addPlayer(Player player)
        {
            logger.Info("Entering into Player Repository addPlayer Method");
            int res = 1;
            using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                DynamicParameters param = new DynamicParameters();
                
                param.Add("@firstName", player.firstName);
                param.Add("@lastName", player.lastName);
                param.Add("@preferredName", player.preferredName);
                param.Add("@gender", player.gender);
                param.Add("@dateOfBirth", player.dateOfBirth);
                param.Add("@countryOfBirth", player.countryOfBirth);
                param.Add("@townOfBirth", player.townOfBirth);
                param.Add("@nationalities", player.nationalities);
                param.Add("@nationalInsuranceNumber", player.nationalInsuranceNumber);
                param.Add("@registrationID", player.registrationID);
                param.Add("@registeringClub", player.registeringClub);
                param.Add("@status", player.status);
                param.Add("@registrationType", player.registrationType);
                param.Add("@player", player.player);
                param.Add("@registration", player.registration);
                param.Add("@transfer", player.transfer);
                param.Add("@intermediaries", player.intermediaries);
                param.Add("@ITC", player.ITC);
                param.Add("@GBE", player.GBE);
                param.Add("@SubmittedBy", player.submittedBy);
                param.Add("@updatedBy", player.updatedBy);

                try
                {
                    var result = connection.Execute(sql: "[SatheshRangasamy].[USP_addPlayer]", param: param, commandType: CommandType.StoredProcedure);
                    return res;
                }
                catch (Exception)
                {
                    logger.Error("Error in Player Repository Add Player Method");
                    throw;
                }


            }
            
        }
        #endregion

        #region Authorize Players
        public int authorizeUser(string name)
        {
            logger.Info("Entering into Player Repository authorizeUser authorizeUser Method");
            int count = 0;
            using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString))
            {
                DynamicParameters param = new DynamicParameters();
                param.Add("@userName", name);
                try
                {
                    var result = connection.QueryMultiple(sql: "[SatheshRangasamy].[USP_authorizeUser]", param: param, commandType: CommandType.StoredProcedure);

                    var test= result.Read<string>(buffered: true).ToList<string>();
                    count = test.Count;

                }
                catch (Exception)
                {
                    logger.Error("Error in Player Repository Authorize Players Method");
                    throw;
                }
            }
            return count;
        }
        #endregion 

    }
}