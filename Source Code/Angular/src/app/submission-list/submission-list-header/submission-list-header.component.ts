import { Component, OnInit,ViewChild } from '@angular/core';

import { PlayerDataService } from '../../player-data.service';

import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce,fadeIn } from 'ng-animate';

import { SubmissionListDataComponent } from '../submission-list-data/submission-list-data.component';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-submission-list-header',
  templateUrl: './submission-list-header.component.html',
  styleUrls: ['./submission-list-header.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(fadeIn,{
     params: { timing: 1,delay:0.5}
    }
    ))])]
})
export class SubmissionListHeaderComponent implements OnInit {

  showHideFilter:boolean = false;
  showHideFilterButton:any = 'Show Filter';
  filterArrow:any="dropdownIcon";
  
  addPlayerModal:boolean=false;

  totalSubmissions:number=0;

  metadata_status_Input_Meta:any=[];
  metadata_registration_type_Input_Meta:any=[];
  metadata_registering_club_Input_Meta:any=[];
  metadata_section_status_Input_Meta:any=[];
  metadata_section_status_name:any=[];
  @ViewChild(SubmissionListDataComponent) child;

  searchSubmissions: string = '';
  filterStatusval: string = 'All statuses';
  filterRegType:string='All types';
  filterRegClub:string='';
  filterSections:string='All sections';
  filterAssignees:string='All assignees';

  newPlayer:any;

  receiveLength($event) {
    this.totalSubmissions = $event
  }


  

assignees:any;

  constructor(private playerService: PlayerDataService,private router:Router) {

    playerService.getMetaData().subscribe((response:any)=>{
     
    this.playerService.metadata=response.body;
    
    this.metadata_status_Input_Meta=response.body['status'];
    this.metadata_registration_type_Input_Meta=response.body['registration_type'];
    this.metadata_registering_club_Input_Meta=response.body['registering_club'];
    this.metadata_section_status_Input_Meta=response.body['section_status'];
    this.metadata_section_status_name=response.body['section_status_name'];
    
    this.assignees=response.body['assignee'];
    
    


    });
  }

  clearFiltersFn()
  {
    this.searchSubmissions='';
    this.filterStatusval= 'All statuses';
    this.filterRegType='All types';
    this.filterRegClub='';
    this.filterSections='All sections';
    this.filterAssignees="All assignees";
    this.child.clearFilters();
  }
  ngOnInit() {
    
  }
  showHideFilterFn()
  {
    this.showHideFilter = !this.showHideFilter;
    if(this.showHideFilter)
    {
        this.showHideFilterButton = "Hide Filter";
        this.filterArrow="dropdownIconInverted";
      }
      else
      {
        this.showHideFilterButton = "Show Filter";
        this.filterArrow="dropdownIcon";
      }
  }

  callFilter(id,searchText)
  {
    this.child.filterFn(id,searchText);
  }

  addPlayerModalShow()
  {
    this.addPlayerModal=true;

  }
  cancelAddPlayer()
  {
    this.addPlayerModal=false;
    this.playerForm.reset();
    this.playerForm.patchValue({
      firstName: '',
      lastName:'',
      preferredName:'',
      gender:'Male',
      dateOfBirth:'',
      townOfBirth:'',
      countryOfBirth:'',
      nationalities:'',
      nationalInsuranceNumber:'',
      registrationID:'',
      registeringClub:'-1',
      status:'-1',
      registrationType:'-1',

      player:'-1',
      registration:'-1',
      transfer:'-1',
      intermediaries:'-1',
      ITC:'-1',
      GBE:'-1',
    });
  }
  addPlayer()
  {
    this.newPlayer={
                    firstName:this.playerForm.get('firstName').value,
                    lastName:this.playerForm.get('lastName').value,
                    preferredName:this.playerForm.get('preferredName').value,
                    gender:this.playerForm.get('gender').value,
                    townOfBirth:this.playerForm.get('townOfBirth').value,
                    dateOfBirth:this.playerForm.get('dateOfBirth').value,
                    countryOfBirth:this.playerForm.get('countryOfBirth').value,
                    nationalities:this.playerForm.get('nationalities').value,
                    nationalInsuranceNumber:this.playerForm.get('nationalInsuranceNumber').value,

                    registrationID:this.playerForm.get('registrationID').value,
                    registeringClub:this.playerForm.get('registeringClub').value,
                    status:this.playerForm.get('status').value,
                    registrationType:this.playerForm.get('registrationType').value,
              
                    player:this.playerForm.get('player').value,
                    registration:this.playerForm.get('registration').value,
                    transfer:this.playerForm.get('transfer').value,
                    intermediaries:this.playerForm.get('intermediaries').value,
                    ITC:this.playerForm.get('ITC').value,
                    GBE:this.playerForm.get('GBE').value,
                    submittedBy:document.getElementById('userName').innerHTML.substring(10),
                    updatedBy:document.getElementById('userName').innerHTML.substring(10)

      }

      this.playerService.addPlayer(this.newPlayer).subscribe((response:any)=>{
          console.log(response);
          this.cancelAddPlayer();
          this.child.getData();
      }
      ,
    (error:any)=>
    {
      this.router.navigate(['/','notFound']);
    });
      
  }


  numSplCharsPattern = "^[a-zA-Z ]*$";
  insNumPattern = "^[a-zA-Z0-9 ]*$";
  numSplChars2Pattern = "^[a-zA-Z- ]*$";

  playerForm = new FormGroup({
    firstName: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(40),
      Validators.pattern(this.numSplCharsPattern)
      ]),

      lastName: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.pattern(this.numSplCharsPattern)
        ]),
  
  
     preferredName: new FormControl('',[
        Validators.required,
        Validators.maxLength(40),
        Validators.pattern(this.numSplChars2Pattern)
        ]),

  gender:new FormControl('Male'),

   dateOfBirth:new FormControl('',[
     Validators.pattern('(0[1-9]|1[0-9]|2[0-9]|3[0-1]) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC) (19[0-9]{2}|20[0-9]{2})'),
     Validators.required]),

   townOfBirth:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(40),
      Validators.pattern(this.numSplCharsPattern)
      ]),

   countryOfBirth:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(40),
      Validators.pattern(this.numSplCharsPattern)
      ]),

      nationalities:new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40),
        Validators.pattern(this.numSplCharsPattern)
        ]),
  
  
     nationalInsuranceNumber:new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40),
        Validators.pattern(this.insNumPattern)
        ]),

        registrationID:new FormControl('',[
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(40),
          Validators.pattern(this.insNumPattern)
          ]),

          status:new FormControl('-1'),

          
          registeringClub:new FormControl('-1'),
          
          registrationType:new FormControl('-1'),
    
          player:new FormControl('-1'),
          registration:new FormControl('-1'),
          transfer:new FormControl('-1'),
          intermediaries:new FormControl('-1'),
          ITC:new FormControl('-1'),
          GBE:new FormControl('-1'),
  });













}
