import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.scss'],
  animations: [
    trigger('showList', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate(200)),
    ]),
  ],
})
export class ExampleComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.form.valueChanges.subscribe(value => {
      this.selectedCountryCode = value.code;
      this.phoneNumber = value.phone;
    })
  }

  // Mock JSON
  countryCodes: { code: string; country: string; flag: string }[] = [
    { code: '+375', country: 'Беларусь', flag: 'BY' },
    { code: '+1', country: 'США', flag: 'US' },
    { code: '+44', country: 'Великобритания', flag: 'UK' },
    { code: '+91', country: 'Индия', flag: 'IN' },
    { code: '+86', country: 'Китай', flag: 'CN' },
    { code: '+49', country: 'Германия', flag: 'DE' },
    { code: '+33', country: 'Франция', flag: 'FR' },
    { code: '+7', country: 'Россия', flag: 'RU' },
    { code: '+81', country: 'Япония', flag: 'JP' },
    { code: '+61', country: 'Австралия', flag: 'AU' },
    { code: '+39', country: 'Италия', flag: 'IT' },
    { code: '+82', country: 'Южная Корея', flag: 'KR' },
    { code: '+34', country: 'Испания', flag: 'ES' },
    { code: '+91', country: 'Индия', flag: 'IN' },
  ];
  selectedCountryCode: string = ''; // Выбранный код страны
  phoneNumber: string = ''; // Введенный телефонный номер
  showCountryCodes: boolean = false; // Флаг для отображения списка кодов

  selectCountryCode(code: string) {
    this.form.patchValue({ code });
    this.showList();
  }

  initForm() {
    this.form = this.fb.group({
      code: [this.countryCodes[0].flag, Validators.required],
      phone: [null, Validators.required],
    });
  }

  showList() {
    this.showCountryCodes = !this.showCountryCodes;
  }
}
