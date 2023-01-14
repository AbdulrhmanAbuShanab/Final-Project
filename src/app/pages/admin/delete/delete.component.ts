import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AdminFirebaseService } from "src/app/lib/services/admin-firebase.service";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.css"],
})
export class DeleteComponent {
  constructor(
    private companyService: AdminFirebaseService,
    private dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  confirm() {
    //delete company
    this.companyService.deleteCompany(this.data.id).then((_) => {
      this.dialogRef.close(true);
    });
  }
}
