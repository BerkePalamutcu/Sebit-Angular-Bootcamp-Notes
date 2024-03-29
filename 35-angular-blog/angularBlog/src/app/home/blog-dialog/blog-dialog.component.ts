import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl,Validators, FormGroup } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.css']
})
export class BlogDialogComponent implements OnInit {
  isUpdate: boolean = false;

  form = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    body: new FormControl(null, [Validators.required]),


  })

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private blogService: BlogService,
  private dialogRef: MatDialogRef<BlogDialogComponent>) {
    if(data.isUpdate){
      this.isUpdate=true;
      this.form.patchValue({
        title: data.blog.title,
        body: data.blog.body
      })
    } else {

    }
   }

  ngOnInit(): void {
  }

  onSubmit(){
    const request = {
      title: this.form.get('title')?.value,
      body: this.form.get('body')?.value,
      imageId: this.data.blog.imageId,
      userId:this.data.blog.userId
    }
    this.blogService.updatePost(this.data.blog.id, request).subscribe((res) => {
      this.close()
    })
  }

  close(){
    this.dialogRef.close();
  }
}
