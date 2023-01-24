import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Company } from 'src/app/lib/Interfaces/company';
import { AdminFirebaseService } from 'src/app/lib/services/admin-firebase.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  
  requestForm = new FormGroup({
    companyName: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    founder: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    sector: new FormControl('', [Validators.required]),
    logo: new FormControl('', [Validators.required]),
    website: new FormControl('', [Validators.required]),    
    numOfEmployees: new FormControl<number | ''>('', [Validators.required, Validators.min(1)]),
    yearOfEstablishment: new FormControl<number | ''>('', [Validators.required, Validators.min(1)]),
  })
  request: Company = {
    city: '',
    companyName: '',
    email: '',
    founder: '',
    logo: '',
    numOfEmployees: 0,
    phone: '',
    sector: '',
    website: '',
    yearOfEstablishment: 0,
  };
  requests:Company[] = [];
  requests$? : Observable<Company[]>;
  sub?: Subscription;
  constructor(private requestService: AdminFirebaseService, private router: Router){

  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  ngOnInit(): void {
   this.requests$  =this.requestService.getRequests();
  }

  submit(){
    this.requestService.acceptRequest(this.request).subscribe({
      next: (response)=> {
        this.router.navigate(['user/home']);  
      },
      error: (error)=> {
        alert(JSON.stringify(error));
      },
      complete: ()=> console.log('completed')
    });
      //navigate
    }
  }

  

