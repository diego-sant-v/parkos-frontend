import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

import { VehicleModel } from '../../model/vehicle.model';
import { CategoryEnum } from '../../enum/category-enum'; // ajuste os imports
import { TypeRegisterEnum } from '../../enum/type-register-enum';
import { FuelEnum } from '../../enum/fuel-enum';
import { PreferredSectorEnum } from '../../enum/preferred-sector-enum';
import { ParkOsService } from '../../service/parkos.service';
import { ImageUpload } from '../image-upload/image-upload';

@Component({
  selector: 'app-add-vehicle',
  standalone: true,
  imports: [LucideAngularModule, ReactiveFormsModule, ImageUpload],
  templateUrl: './add-vehicle.html',
  styleUrls: ['./add-vehicle.css']
})
export class AddVehicle implements OnInit {
  categoryEnum = CategoryEnum;
  typeRegisterEnum = TypeRegisterEnum;
  fuelEnum = FuelEnum;
  preferredSectorEnum = PreferredSectorEnum;
  form!: FormGroup;

  constructor(private fb: FormBuilder, private parkosService: ParkOsService) { }

  ngOnInit(): void {
  this.form = this.fb.group({
    UUID: this.fb.control('', { nonNullable: true }),
    carLicensePlate: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
    color: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
    model: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
    mark: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
    photoUrl: this.fb.control('', { nonNullable: true }),
    category: this.fb.control<CategoryEnum>(CategoryEnum.PASSEIO, { nonNullable: true }),
    fuel: this.fb.control<FuelEnum>(FuelEnum.FLEX, { nonNullable: true }),
    preferredSector: this.fb.control<PreferredSectorEnum>(PreferredSectorEnum.QUALQUER, { nonNullable: true }),
    year: this.fb.control<number>(new Date().getFullYear(), { nonNullable: true }),
    typeRegister: this.fb.control<TypeRegisterEnum>(TypeRegisterEnum.AVULSO, { nonNullable: true }),

    driverVehicle: this.fb.group({
      UUID: this.fb.control('', { nonNullable: true }),
      name: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
      email: this.fb.control('', { nonNullable: true, validators: [Validators.email] }),
      document: this.fb.control('', { nonNullable: true }),
      mobilePhone: this.fb.control('', { nonNullable: true }),
      company: this.fb.control('', { nonNullable: true }),
      observation: this.fb.control(''),
      licensePlate: this.fb.control('', { nonNullable: true })
    })
  });
}

  onSubmit() {
     const vehicle: VehicleModel = this.form.getRawValue();

      this.parkosService.registerVehicle(vehicle).subscribe(res => {
        console.log('no res', res)
      })
  }
  
  onImageUploaded(base64: string) {
    this.form.patchValue({ photoUrl: base64 });
  }
}