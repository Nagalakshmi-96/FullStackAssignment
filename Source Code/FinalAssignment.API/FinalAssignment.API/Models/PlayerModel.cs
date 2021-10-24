using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FinalAssignment.API.Entities;
using FinalAssignment.API.DAL.Repository;
using FinalAssignment.API.DAL.Persistence;
using NLog;


namespace FinalAssignment.API.Models
{
    public class PlayerModel
    {
        #region Logger
        private static readonly Logger logger = LogManager.GetCurrentClassLogger();
        #endregion

        #region Interface Object creation
        IPlayer player = new PlayerRepository();
        #endregion

        #region GetPlayers Method
        public List<Player> GetPlayers(int? id)
        {
            logger.Info("Entering into Player Model GetPlayers Method");
            return player.GetPlayers(id);
        }
        #endregion

        #region updatePlayers Method
        public int updatePlayers(Player playerVal, int id)
        {
            logger.Info("Entering into Player Model updatePlayers Method");
            return player.updatePlayers(playerVal, id);
        }
        #endregion

        #region DeletePlayer Method
        public int deletePlayer(int id)
        {
            logger.Info("Entering into Player Model deletePlayer Method");
            return player.deletePlayer(id);
        }
        #endregion

        #region Get MetaData Method
        public MetaData getMetaData()
        {
            logger.Info("Entering into Player Model getMetaData Method");
            return player.getMetaData();
        }
        #endregion

        #region Add Player Method
        public int addPlayer(Player playerVal)
        {
            logger.Info("Entering into Player Model addPlayer Method");
            return player.addPlayer(playerVal);
        }
        #endregion

        #region Authorize User Method
        public int authorizeUser(string name)
        {
            logger.Info("Entering into Player Model authorizeUser Method");
            return player.authorizeUser(name);
        }

        #endregion

    }
}