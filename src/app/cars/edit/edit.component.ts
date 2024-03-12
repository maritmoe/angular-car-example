import { Component, inject } from '@angular/core';
import { CarService } from '../../car.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from '../models/car';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  carService = inject(CarService);
  carForm: FormGroup;
  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');
  car: Car | null = this.carService.getCarById(Number(this.id));
  router = inject(Router);

  constructor(private formBuilder: FormBuilder) {
    if (this.car) {
      this.carForm = this.formBuilder.group({
        make: [this.car.make, Validators.required],
        model: [this.car.model, Validators.required],
        description: [this.car.description, Validators.required],
      });
    } else {
      this.carForm = this.formBuilder.group({
        make: ['', Validators.required],
        model: ['', Validators.required],
        description: ['', Validators.required],
      });
    }
  }

  editCar() {
    if (this.car) {
      this.car = {
        ...this.car,
        make: this.carForm.value.make,
        model: this.carForm.value.model,
        description: this.carForm.value.description,
      };

      this.carService.editCar(this.car);
      this.router.navigate(['cars']);
    }
  }
}
