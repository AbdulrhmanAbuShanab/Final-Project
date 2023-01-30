import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Sector } from 'src/app/lib/Interfaces/sector';
import { AdminFirebaseService } from 'src/app/lib/services/admin-firebase.service';
import { FilestorageService } from 'src/app/lib/services/storage/filestorage.service';

@Component({
  selector: 'app-create-s',
  templateUrl: './create-s.component.html',
  styleUrls: ['./create-s.component.css']
})
export class CreateSComponent {
  createSector = new FormGroup({
    sectorName: new FormControl("", [Validators.required]),
    sectorLogo: new FormControl("", [Validators.required]),
  });
  sector: Sector = {
    sectorName: "",
    sectorLogo: "",
  };
  sectors: Sector[] = [];
  sectors$?: Observable<Sector[]>;
  sub?: Subscription;
  sectorLogoUrl?: string;
  showSuccessAlert: boolean = false;
  constructor(
    private storage: FilestorageService,
    private sectorsService: AdminFirebaseService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    this.sectors$ = this.sectorsService.getSectors();
  }
  //Submiting the request
  submit() {
      this.sectorsService.addSector(
        {...this.createSector.value as Sector}
      ).subscribe({
        next: (response)=> {
          this.onSubmit();
        },
        error: (error)=> {
          alert(JSON.stringify(error));
        },
        complete: ()=> console.log('completed')
      });
        //navigate
      }
    //Showing success alert
    onSubmit() {
      this.showSuccessAlert = true;
      setTimeout(() => {
        this.showSuccessAlert = false;
      }, 2000);
      setTimeout(() => {
        this.router.navigate(["admin/sectors"]);
      }, 3000);
    }
  //Uploading image to firestorage
  upload(event: Event) {
    let file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      this.storage.uploadSectorLogo(file).subscribe((value) => {
       this.sectorLogoUrl=value;
       this.createSector.controls.sectorLogo.setValue(value);
       
      });
    }
  }
}
