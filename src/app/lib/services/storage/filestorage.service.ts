import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { last, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilestorageService {

  constructor(private fireStorage: AngularFireStorage) { }

  uploadStartupLogo(file:File){
    const filePath = `startups/${file.name}`;
    const storageRef = this.fireStorage.ref(filePath);
    let downloadTask = storageRef.put(file).snapshotChanges()
    .pipe(
      last(),
      switchMap((val)=>{
        return storageRef.getDownloadURL()
      })
    )
    return downloadTask;
  }
}
