import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PagingService } from '../../paging.service';
import {PlayerDataService} from '../../player-data.service';

import { SubmissionListHeaderComponent} from '../submission-list-header/submission-list-header.component';


import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { forwardRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submission-list-data',
  templateUrl: './submission-list-data.component.html',
  styleUrls: ['./submission-list-data.component.css'],
  animations: [

    trigger('anim', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class SubmissionListDataComponent implements OnInit {

  bounce: any;


  @Input() playerDetails: any;
  @Input() playerDetailsCopy: any;
  @Input() searchText:any;
  @Input() filterStatus:any;
  @Input() filterRegType:any;
  @Input() filterRegClub:any;
  @Input() filterSections:any;
  @Input() filterAssignees:any;

     pager: any = {};
filterArray:any[];
     pagedItems: any[];

     v1:string="";
     v2:string="";
     v3:string="all statuses";
     v4:string="all types";
     v5:string="all assignees";
     v6:string="all sections";

     num:number = 6;
     i:number;
     showLoader:boolean=true;

     cancelPlayerModal:boolean=false;
      deleteID:any;
     
     
     @Output() totalLengthEvent = new EventEmitter<any>()

  showHideFilter:boolean = false;
  showHideFilterButton:any = 'Show Filter';
  filterArrow:any="dropdownIcon";


  constructor(private PagingService: PagingService,private playerService: PlayerDataService,private router: Router) {
    this.getData();
   
  }

  showDeletePlayer(event,id)
  {
    this.cancelPlayerModal=true;
    event.stopPropagation();
    this.deleteID=id;
   
  }
 

  cancelDeletePlayer()
  {
    this.cancelPlayerModal=false;
  }
  onClickedOutside(e: Event) {
  
 }

  getData()
  {
    
    this.playerService.getPlayerList().subscribe(
      (response: any) =>{
      this.playerDetails=response.body;
      this.playerDetailsCopy=response.body;
      this.totalLengthEvent.emit(this.playerDetails.length);
      this.showLoader=false;
      this.setPage(1);
      },
      (error:any)=>
      {
        this.router.navigate(['/','notFound']);
      }
      
    );
  }

deletePlayer()
 {
  this.cancelPlayerModal=false;
  this.playerService.deletePlayer(this.deleteID).subscribe((response: any) =>{
    
    this.getData();
    },
    (error:any)=>
    {
      this.router.navigate(['/','notFound']);
    }
  );



 }


  ngOnInit() {
    this.setPage(0);
  }
clearFilters()
{
  this.v1="";
  this.v2="";
  this.v3="all statuses";
  this.v4="all types";
  this.v5="all assignees";
  this.v6="all sections";
this.playerDetails=this.playerDetailsCopy;
this.pager = this.PagingService.getPager(this.playerDetails.length);
this.pagedItems = this.playerDetails.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
filterFn(id,searchText)
{
    searchText=searchText.toLowerCase();
    switch(id)
    {
      case 1:this.v1=searchText;
              break;
      case 2:this.v2=searchText;
              break;
      case 3:this.v3=searchText;
              break;
      case 4:this.v4=searchText;
              break;
      case 5:this.v5=searchText;
              break;
      case 6:this.v6=searchText;
              break;
    }
this.playerDetails=this.playerDetailsCopy;
for(this.i=0;this.i<this.num;this.i++)
{
  console.log(this.v6);
  switch(this.i)
    {
      case 0:if(this.v1==" ") return this.playerDetails;
              this.playerDetails= this.playerDetails.filter(x =>((x.firstName+" "+x.lastName).toLowerCase().indexOf(this.v1)!=-1));
              break;
      case 1:if(this.v2==" ") return this.playerDetails;
              this.playerDetails= this.playerDetails.filter(x =>(x.registeringClub).toLowerCase().indexOf(this.v2)!=-1);
              break;
      case 2:if(this.v3 == "all statuses") this.playerDetails= this.playerDetails;

              else this.playerDetails= this.playerDetails.filter(x =>(x.status.toLowerCase() == this.v3));
              break;
      case 3:if(this.v4 == "all types") this.playerDetails= this.playerDetails;
             else this.playerDetails= this.playerDetails.filter(x =>(x.registrationType.toLowerCase() == this.v4));
              break;
      case 4:if(this.v5 == "all assignees") this.playerDetails= this.playerDetails;
              else this.playerDetails= this.playerDetails.filter(x =>(x.assignee.toLowerCase() == this.v5));
                break;
      case 5:if(this.v6 == "all sections") this.playerDetails= this.playerDetails;
              else
              {
                if(this.v6 == "player") this.playerDetails= this.playerDetails.filter(x =>(x.player=="approved"));
                else if(this.v6 == "registration") this.playerDetails= this.playerDetails.filter(x =>(x.registration=="approved"));
                else if(this.v6 == "transfer") this.playerDetails= this.playerDetails.filter(x =>(x.transfer=="approved"));
                else if(this.v6 == "intermediaries") this.playerDetails =this.playerDetails.filter(x =>(x.intermediaries=="approved"));
                else if(this.v6 == "itc") this.playerDetails =this.playerDetails.filter(x =>(x.ITC=="approved"));
                else if(this.v6 == "gbe") this.playerDetails= this.playerDetails.filter(x =>(x.GBE=="approved"));
              }
    }
}
  this.pager = this.PagingService.getPager(this.playerDetails.length);
  this.pagedItems = this.playerDetails.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
    setPage(page: number) {
        if(page===0)
        {
          this.pager={totalItems: 0,currentPage: 0,totalPages: 0,startIndex: 0,endIndex: 0}
        }
        else
        {
         this.pager = this.PagingService.getPager(this.playerDetails.length,page);

         this.pagedItems = this.playerDetails.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
     }



  findApplicationStatus(status)
  {
    
    if(status == "Pending (FA & League)" || status == "Pending (FA)" || status=="Pending") return "pendingStyle";
    else if(status == "Pending (League)") return "pendingStyle2";
    else if(status == "On-hold") return "holdStyle";
    else if(status == "Rejected") return "rejectedStyle";
    else if(status == "Approved") return "approvedStyle";
  }
  findStatusIcon(status) {
     if(status == "pending") return "pendingIcon";
     else if(status == "approved") return "approvedIcon";
     else if(status == "rejected") return "rejectedIcon";
     else if(status == "NA") return "NAIcon";
     else if(status == "hold") return "holdIcon";
   }


}
