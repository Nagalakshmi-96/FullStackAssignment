using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FinalAssignment.API.Entities;

namespace FinalAssignment.API.DAL.Repository
{
    
    interface IPlayer
    {
        List<Player> GetPlayers(int? id);
        int updatePlayers(Player player, int id);
        int deletePlayer(int id);
        MetaData getMetaData();
        int addPlayer(Player player);
        int authorizeUser(string name);

    }
   
}