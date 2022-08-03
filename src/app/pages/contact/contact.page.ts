import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../service/contact.service';
import {environment} from '../../../environments/environment.prod';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  contactGroup = this.formBuilder.group({
    fullName: '',
    email: '',
    message: '',
  });

  constructor(private formBuilder: FormBuilder, public alertController: AlertController) {
  }

  ngOnInit() {
  }

  onSubmit(e: any) {
    e.preventDefault();
    emailjs.sendForm('DeerValley', 'DeerValleyTemplate', e.target as HTMLFormElement, environment.emailApiPublicKey)
      .then((result: EmailJSResponseStatus) => {
          this.presentAlert('Success!', 'We\'ve sent your message!',
            'We\'ll get back with you as soon as possible!', 'Close').then();
      }, (error) => {
        this.presentAlert('Error', 'Something went wrong', 'Please check your inputs and try again.', 'Ok').then();
      });
  }

  async presentAlert(header: string, subHeader: string, message: string, buttonText: string) {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header,
      subHeader,
      message,
      buttons: [buttonText]
    });

    await alert.present();

    await alert.onDidDismiss();
    this.contactGroup.reset();
  }
}
