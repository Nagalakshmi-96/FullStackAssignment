import { Component, OnInit, Input } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import {PlayerDataService} from '../../player-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-assignee',
  templateUrl: './add-assignee.component.html',
  styleUrls: ['./add-assignee.component.css']
})
export class AddAssigneeComponent implements OnInit {

  @Input() player:any;
  assignee:any='';

  showAssigneeFlag:boolean=false;
  showCancelAssignee:boolean=false;

  assignees:any;

  constructor(private cdRef:ChangeDetectorRef,private playerService:PlayerDataService,private router:Router) {
    playerService.getMetaData().subscribe((response:any)=>{
     
      this.assignees=response.body['assignee'];
        
      },
      (error:any)=>
      {
        this.router.navigate(['/','notFound']);
      }
      );
  
  }
  ngAfterViewChecked()
  {
    this.cdRef.detectChanges();
  }

  ngOnChanges()
  {
    
    
    

    if(this.player.assigneeShort!="NA")
    {
      this.showCancelAssignee=true;
      this.assignee=this.player.assignee;
    }
    else
    {
      this.showCancelAssignee=false;
    }
  }




  ngOnInit() {
  }
  addAssigneeFn(event:Event)
  {
    this.showAssigneeFlag = true;
    event.stopPropagation();
  }
  closePopup()
  {
    this.showAssigneeFlag = false;
  }
  updateAssignee(value)
  {
    this.showAssigneeFlag = false;
    this.showCancelAssignee=true;
    if(value=="me")
      value=document.getElementById('userName').innerHTML.substring(10);
    var temp=this.assignees.find(x=>x.assignee==value);
    this.assignee=value;
    this.player.assigneeShort=temp.assigneeShort;
    this.player.assignee=value;
    this.player.color=temp.color;
    this.updateAssignee1();
}
  cancelAssignee()
  {
    this.assignee='';
    this.showCancelAssignee=false;
    this.player.assigneeShort="NA";
    this.player.assignee="NA";
    this.player.color='NA';
    this.updateAssignee1();
  }

  updateAssignee1()
  {
    this.playerService.updatePlayer(this.player.playerID,this.player).subscribe((response:any)=>{

    }
    ,
    (error:any)=>
    {
      this.router.navigate(['/','notFound']);
    });
  }


}
