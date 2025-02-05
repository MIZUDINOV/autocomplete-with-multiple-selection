import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AutocompleteMultiComponent } from './autocomplete-multi/autocomplete-multi.component';
import { AutocompleteMultiTrigger } from './autocomplete-multi/autocomplete-multi-trigger';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AutocompleteMultiComponent,
    AutocompleteMultiTrigger,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'autocomplete-multiple-project';
}
