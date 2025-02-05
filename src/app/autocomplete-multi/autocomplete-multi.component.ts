import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import {
  MAT_OPTION_PARENT_COMPONENT,
  MatOption,
  MatOptionParentComponent,
} from '@angular/material/core';

@Component({
  selector: 'app-autocomplete-multi',
  templateUrl: './autocomplete-multi.component.html',
  styleUrls: ['./autocomplete-multi.component.scss'],
  exportAs: 'matAutocompleteMultiple',
  standalone: true,
  providers: [
    {
      provide: MAT_OPTION_PARENT_COMPONENT,
      useExisting: AutocompleteMultiComponent,
    },
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteMultiComponent
  implements AfterViewInit, AfterContentInit, MatOptionParentComponent
{
  readonly options = contentChildren(MatOption);
  readonly showPanel = signal(false);

  readonly multiple = true;

  ngAfterViewInit(): void {
    console.log(this.options());
  }

  ngAfterContentInit(): void {
    this.setPanelVisibility();
  }

  private setPanelVisibility() {
    this.showPanel.set(this.options().length > 0);
  }
}
