import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './model/employee';

@Pipe({
  name: 'employeeFilterPipe'
})
export class EmployeeFilterPipePipe implements PipeTransform {

  

  transform(list: Employee[], searchText: string): any {
    if (!list)
      return [];
    if (!searchText)
      return list;
      searchText = searchText.toString();
    // searchText = searchText.toLocaleUpperCase();
    // searchText = searchText.toLocaleLowerCase();

    list = list.filter(s => {
      return s.name.includes(searchText);
    });
    return list;

  }

}
