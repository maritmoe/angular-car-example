import { Component, inject } from '@angular/core';
import { CarService } from '../../car.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/car';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  carService = inject(CarService);
  route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id');

  car: Car | null = this.carService.getCarById(Number(this.id));
}
