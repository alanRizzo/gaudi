import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { latLng, icon, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  submitted = false;

  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; OpenStreetMap contributors'
  });

  summit = marker([-31.427850, -64.189190], {
    icon: icon({
      iconSize: [ 35, 35 ],
      iconAnchor: [ 35, 35 ],
      iconUrl: 'assets/img/marker-icon.png'
    })
  });

  options = {
    layers: [this.streetMaps, this.summit],
    zoom: 16,
    center: latLng([-31.427850, -64.189190]),
    scrollWheelZoom: false
  };

  contactForm: FormGroup;

  constructor() {
    this.contactForm = new FormGroup({
      'nombre': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'asunto': new FormControl('', Validators.required),
      'mensaje': new FormControl('', Validators.required)
    });
  }

  sendContactForm( element: any ) {
    this.submitted = true;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log(this.contactForm.value);
  }

  contactResetForm() {
    this.submitted = false;
    this.contactForm.reset();
  }
}
