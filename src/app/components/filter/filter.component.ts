import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from 'src/app/interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined 
  }

  statusList = [
    { 
      description: 'Ativo',
      value: true
    },
    { 
      description: 'Inativo',
      value: false
    }
  ]

  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>()

  onFilter () {
    this.onFilterEmitt.emit(this.filterOptions)
  }
}
