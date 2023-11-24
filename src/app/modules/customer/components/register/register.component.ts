import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  selectOptionsState = [
    {
      value: 'MG',
      viewValue: 'Minas Gerais',
    },
  ];
  selectOptionsCity = [
    { value: 'unai', viewValue: 'Unaí' },
    { value: 'brasilia', viewValue: 'Brasilia' },
  ];

  radioOptions = [
    { value: 'credit_card', viewValue: 'Cartão de Crédito' },
    { value: 'bank_slip', viewValue: 'Boleto Bancário' },
  ];

  selectOptionsYear = [
    { value: '2022', viewValue: '2022' },
    { value: '2023', viewValue: '2023' },
  ];

  selectOptionsMonth = [
    { value: '27', viewValue: '27' },
    { value: '28', viewValue: '28' },
  ];

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      cep: ['', Validators.required],
      selectedRadioOption: ['credit_card', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      holderName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      cvv: ['', Validators.required],
      createAt: [new Date()],
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const customersData = sessionStorage.getItem('customers') ?? '[]';
    let customers = JSON.parse(customersData);

    customers.push(this.form.value);

    sessionStorage.setItem('customers', JSON.stringify(customers));
    this.router.navigateByUrl('');
  }
}
