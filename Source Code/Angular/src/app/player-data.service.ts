  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Router } from '@angular/router';
  import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
   
  assignee:any;
  metadata:any;
  

  constructor(private http:HttpClient,private router: Router) 
  {
    this.getMetaData().subscribe((response:any)=>{
      this.metadata=response.body;
    });
  }
  getPlayerList()
  {
     return this.http.get('api/getPlayers', { observe: 'response' })
  }
  getIndividualPlayer(id)
  {
     return this.http.get("api/getPlayer/"+id, { observe: 'response' })
  }

  updatePlayer(id,player)
  {
    return this.http.put("api/updatePlayer/"+id,player, { observe: 'response' })
  }
  

  deletePlayer(id)
  {
    return this.http.delete("api/deletePlayer/"+id,{observe:'response'})
  }
  
  getMetaData()
  {
    return this.http.get('api/getMetaData',{observe:'response'})    
  }

  addPlayer(player)
  {
    return this.http.post('api/addPlayer',player,{observe:'response'})
  }

}
