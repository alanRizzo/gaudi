import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tesis',
  templateUrl: './tesis.component.html'
})
export class TesisComponent {

  submitted = false;

  showBound = null;
  showModel = false;
  printed = false;
  impressed = false;
  nCopies = [1, 2, 3, 4, 5, 6];
  tOrientation = ['Vertical', 'Horizontal'];
  pSize = ['A4', 'A3'];
  tPaper = ['Obra 80 g', 'Obra 120 g', 'Ilustración 120 g'];
  tBound = ['Cosido', 'Anillado'];
  impressedColor = ['Azul', 'Dorado', 'Plateado', 'Rojo'];
  letherColor = [
    'Azul claro',
    'Azul oscuro',
    'Bordo claro',
    'Bordo oscuro',
    'Gris claro',
    'Gris oscuro',
    'Negro',
    'Marrón',
    'Rojo',
    'Verde',
    ];
  tSewing = [
    {
      name: 'Cosido ploteado',
      description: 'Cosido lateral, con tapas duras de cartón de 2mm, forradas con una impresión full color laminada en opp brillante.',
    },
    {
      name: 'Cosido clásico',
      // tslint:disable-next-line:max-line-length
      description: 'Cosido lateral, con tapas duras en cartón de 2mm, forradas con cuerina de color, con grabado en serigrafía monocromática, en la tapa y el lomo.',
    },
    {
      name: 'Binder',
      // tslint:disable-next-line:max-line-length
      description: 'Engomado o pegado lateral, terminado con tapas blandas de cartulina forrada o papel ilustración 300 grs. Impresas full color frente con la opción de laminar una cara con opp brillante.',
    }
  ];
  tRinged = [
    {
      name: 'Anillado ploteado',
      // tslint:disable-next-line:max-line-length
      description: 'Anillado metálico lateral con tapas duras de cartón de 2mm, forradas con una impresión full color laminada en opp brillante.',
    },
    {
      name: 'Anillado clásico',
      // tslint:disable-next-line:max-line-length
      description: 'Anillado metálico lateral con tapas duras de cartón de 2mm, forradas con cuerina de color y grabadas en serigrafía monocromática.',
    },
    {
      name: 'Anillado base',
      description: 'Anillado metálico lateral, con tapa impresa en papel ilustración mate de 300 gramos, más tapas plásticas protectoras.',
    }
  ];

  tesisForm: FormGroup;

  constructor() {
    this.tesisForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'telephone': new FormControl(null, Validators.required),
      'copies': new FormControl(this.nCopies[0], Validators.required),
      'orientation': new FormControl(this.tOrientation[0], Validators.required),
      'size': new FormControl(this.pSize[0], Validators.required),
      'paper': new FormControl(this.tPaper[0], Validators.required),
      'type': new FormControl(null, Validators.required),
      'cover': new FormControl(null, Validators.required),
      'bound': new FormControl(null, Validators.required),
      'colorLether': new FormControl(null, Validators.required),
      'colorImpressed': new FormControl(null, Validators.required),
      'comment': new FormControl(null),
    });
  }

  showType( index: number, boundClasses: string[]) {
    this.showBound = index;
    console.log(boundClasses);

    if ( boundClasses.includes('ng-dirty') ) {
      this.tesisForm.controls.type.reset();
      this.tesisForm.controls.colorImpressed.reset();
      this.tesisForm.controls.colorLether.reset();
      console.log(this.tesisForm.controls);
    }
  }

  showOption( index: number) {
    switch (index) {
      case 0: {
        this.showModel = true;
        this.printed = true;
        this.impressed = false;
        break;
      }
      case 1: {
        this.showModel = true;
        this.printed = false;
        this.impressed = true;
        break;
      }
      case 2: {
        this.showModel = false;
        this.printed = false;
        this.impressed = false;
        break;
      }
    }
  }

  sendBudgetForm( element: any ) {
    this.submitted = true;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log(this.tesisForm.value);
  }

  budgetResetForm() {
    this.submitted = false;
    this.showBound = null;
    this.tesisForm.reset({
      'copies': this.nCopies[0],
      'orientation': this.tOrientation[0],
      'size': this.pSize[0],
      'paper': this.tPaper[0],
    });
  }
}

