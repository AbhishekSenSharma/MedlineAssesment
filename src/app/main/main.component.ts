import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl} from '@angular/forms';
import {ComponentValidation } from '../shared/common.constants';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  public form: FormGroup;
  public submitted: boolean = false;
  public modalRef: BsModalRef;
  public formValue;
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.createForm();
  }

  public get f() {
    return this.form.controls;
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  confirm(): void {

    this.modalRef.hide();
     this.router.navigate(['thankyou']);
  }

  public onSubmit(form,template) {
    this.submitted = true;
    // stop here if form is invalid
    if (form.invalid) {
      return;
    } else {
      this.formValue = form.value;
      this.openModal(template);
    }
  }

  private createForm() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern(ComponentValidation.Number)]],
      extension: ['', Validators.pattern(ComponentValidation.Number)]
    });
  }

}
