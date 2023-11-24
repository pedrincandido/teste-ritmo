import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent {
  customers: any[] = [];
  filteredCustomers: any[] = [];

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    const customersData = sessionStorage.getItem('customers');
    if (customersData) {
      this.customers = JSON.parse(customersData);
      this.filteredCustomers = this.customers;
    }
  }

  onFilter(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    if (!value) {
      this.filteredCustomers = this.customers;
    } else {
      this.filteredCustomers = this.customers.filter((customer) =>
        customer.name.toLowerCase().includes(value.toLowerCase())
      );
    }
  }
}
