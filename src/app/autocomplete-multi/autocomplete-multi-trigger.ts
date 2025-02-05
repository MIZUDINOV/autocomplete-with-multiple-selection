import { Directive, ElementRef, inject, input } from '@angular/core';
import { AutocompleteMultiComponent } from './autocomplete-multi.component';

@Directive({
  selector: 'input[matAutocompleteMultiple]',
  standalone: true,
})
export class AutocompleteMultiTrigger {
  private readonly nativeInputElement = inject(ElementRef<HTMLInputElement>);

  readonly autocomplete = input.required<AutocompleteMultiComponent>({
    alias: 'matAutocompleteMultiple',
  });
}
