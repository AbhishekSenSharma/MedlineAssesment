import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { PhonePipe } from './phone.pipe';
@NgModule({
    imports: [
        ReactiveFormsModule,
        AlertModule.forRoot(),
        ModalModule.forRoot()
    ],
    declarations: [
        PhonePipe
    ],
  exports: [
        AlertModule,
        ModalModule,
        ReactiveFormsModule,
        PhonePipe
    ]
})

export class SharedModule { }