import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(players: any[], id: number,searchText: string): any[]
  {

    searchText=searchText.toLowerCase();


    switch(id)
    {
      case 1:return players.filter(x =>((x.firstName+" "+x.lastName).toLowerCase().indexOf(searchText)!=-1));

      case 2:return players.filter(x =>(x.registeringClub).toLowerCase().indexOf(searchText)!=-1);

      case 3:if(searchText == "all statuses") return players;

              else return players.filter(x =>(x.status.toLowerCase() == searchText));

      case 4:if(searchText == "all types") return players;
             else return players.filter(x =>(x.registrationType.toLowerCase() == searchText));

      case 5:if(searchText == "all assignees") return players;
              else return players.filter(x =>(x.assignee.toLowerCase() == searchText));

      case 6:if(searchText == "all sections") return players;

              else
              {
                if(searchText == "player")
                    return players.filter(x =>(x.player=="approved"));
                else if(searchText == "registration")
                    return players.filter(x =>(x.registration=="approved"));
                else if(searchText == "transfer")
                    return players.filter(x =>(x.transfer=="approved"));
                else if(searchText == "intermediaries")
                    return players.filter(x =>(x.intermediaries=="approved"));
                else if(searchText == "itc")
                    return players.filter(x =>(x.ITC=="approved"));
                else if(searchText == "gbe")
                    return players.filter(x =>(x.GBE=="approved"));


              }
    }
  }
}
