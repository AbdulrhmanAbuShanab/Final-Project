import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AdminFirebaseService } from "src/app/lib/services/admin-firebase.service";

@Component({
  selector: "app-delete-request",
  templateUrl: "./delete-request.component.html",
  styleUrls: ["./delete-request.component.css"],
})
export class DeleteRequestComponent {
  constructor(
    private requestService: AdminFirebaseService,
    private dialogRef: MatDialogRef<DeleteRequestComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  confirm() {
    console.log(this.data);
    //delete request
    this.requestService.removeRequest(this.data.id).subscribe((_) => {
      this.dialogRef.close(true);
    });
  }
}
