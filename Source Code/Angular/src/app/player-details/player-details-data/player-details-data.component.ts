import { Component, OnInit, Input , AfterViewInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {PlayerDataService} from '../../player-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-details-data',
  templateUrl: './player-details-data.component.html',
  styleUrls: ['./player-details-data.component.css']
})
export class PlayerDetailsDataComponent implements OnInit {


@Input() player: any;
@Input() editFlag:any;

showLoader:boolean=true;
updatePlayerModal:boolean=false;
details: any;
playerCopy:any;
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


   gender:new FormControl(''),

   dateOfBirth:new FormControl('',Validators.pattern('(0[1-9]|1[0-9]|2[0-9]|3[0-1]) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC) (19[0-9]{2}|20[0-9]{2})')),

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


   submittedBy:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(40),
      Validators.pattern(this.numSplCharsPattern)
      ]),

      registrationDateTime:new FormControl(''),

      submittedDateTime:new FormControl('')
  
});


  constructor(private playerService: PlayerDataService,private router:Router) {




  }

  ngOnInit() {
  }
  updateData()
  {
    this.playerService.getIndividualPlayer(this.player.playerID).subscribe((response: any) =>{
      if(response.status==204) 
      {
        this.router.navigate(['/','notFound']);
      }
      this.player=response.body[0];
      
  
      },
      (error:any)=>
      {
        this.router.navigate(['/','notFound']);
      }
    );
  }
  edit()
  {
    this.playerCopy=this.player;

   
    this.playerForm.patchValue({
      firstName: this.player.firstName,
      lastName:this.player.lastName,
      preferredName:this.player.preferredName,
      gender:this.player.gender,
      dateOfBirth:this.player.dateOfBirth,
      townOfBirth:this.player.townOfBirth,
      countryOfBirth:this.player.countryOfBirth,
      nationalities:this.player.nationalities,
      nationalInsuranceNumber:this.player.nationalInsuranceNumber,
      submittedBy:this.player.submittedBy,
      registrationDateTime:this.player.createdDateTime,
      submittedDateTime:this.player.submittedDateTime
    });
  }
  update()
  {
    if(this.playerForm.status=="VALID")
    {
      this.player.firstName=this.playerForm.get('firstName').value;
      this.player.lastName=this.playerForm.get('lastName').value;
      this.player.preferredName=this.playerForm.get('preferredName').value;
      this.player.gender=this.playerForm.get('gender').value;
      this.player.townOfBirth=this.playerForm.get('townOfBirth').value;
      this.player.dateOfBirth=this.playerForm.get('dateOfBirth').value;
      this.player.countryOfBirth=this.playerForm.get('countryOfBirth').value;
      this.player.nationalities=this.playerForm.get('nationalities').value;
      this.player.nationalInsuranceNumber=this.playerForm.get('nationalInsuranceNumber').value;      
      this.player.updatedBy=document.getElementById('userName').innerHTML.substring(10);
      this.playerService.updatePlayer(this.player.playerID,this.player).subscribe((response: any) =>{
        
        },
        
      (error:any)=>
      {
        this.router.navigate(['/','notFound']);
      }
    );
    return true;

    }
    else
    {
      return false;
    }
  }

  cancel()
  {
    this.player=this.playerCopy;
  }
  getColor(status)
  {
      if(status == "Pending (FA & League)" || status == "Pending (FA)" || status == "Pending") return "pendingStyleBg";
      else if(status == "Pending (League)") return "pendingStyle2Bg";
      else if(status == "On-hold") return "holdStyleBg";
      else if(status == "Rejected") return "rejectedStyleBg";
      else if(status == "Approved") return "approvedStyleBg";
  }

}
