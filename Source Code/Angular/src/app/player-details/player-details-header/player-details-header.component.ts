import { Component, OnInit,ViewChild, SimpleChanges  } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { PlayerDataService } from '../../player-data.service';

import { PlayerDetailsDataComponent } from '../player-details-data/player-details-data.component';

@Component({
  selector: 'app-player-details-header',
  templateUrl: './player-details-header.component.html',
  styleUrls: ['./player-details-header.component.css']
})
export class PlayerDetailsHeaderComponent implements OnInit {

  @ViewChild(PlayerDetailsDataComponent) child;

playerDetails:any;
currentPlayer:any=[];
id:any;
editContentFlag:boolean=false;
updatePlayerModal:boolean=false;
showLoader:boolean=true;

cancelUpdatePlayer()
{
  this.updatePlayerModal=false;
}

editContent()
{
  this.editContentFlag=!this.editContentFlag;
  this.child.edit();

}
updateConfirmation()
{
  this.updatePlayerModal=true;
}
updateContent()
{
  if(this.child.update())
  {
    this.editContentFlag=!this.editContentFlag;
    this.updatePlayerModal=false;
    this.playerService.getIndividualPlayer(this.id).subscribe((response: any) =>{
      if(response.status==204) 
      {
        this.router.navigate(['/','notFound']);
      }
      this.currentPlayer=response.body[0];
      
  
      },
      (error:any)=>
      {
        this.router.navigate(['/','notFound']);
      }
  );
  this.child.updateData();
  }
}
cancelContent()
{
  this.child.cancel();
  this.editContentFlag=!this.editContentFlag;
}
constructor(private route: ActivatedRoute,private playerService: PlayerDataService,private router:Router) {

  

  this.route.params.subscribe(res =>
   this.id=res.id); 
   playerService.getIndividualPlayer(this.id).subscribe((response: any) =>{
    if(response.status==204) 
    {
      this.router.navigate(['/','notFound']);
    }
    this.currentPlayer=response.body[0];
    this.showLoader=false;

    },
    (error:any)=>
    {
      this.router.navigate(['/','notFound']);
    }
);

playerService.getMetaData().subscribe((response:any)=>{
  this.playerService.metadata=response.body;
  
  },
  (error:any)=>
  {
    this.router.navigate(['/','notFound']);
  });

 }

ngOnInit() {


}

ngOnChanges(changes: SimpleChanges) 
{
  console.log("changed");
  if(changes['player'])
  {
    console.log("changed");
  }
}

  
}
