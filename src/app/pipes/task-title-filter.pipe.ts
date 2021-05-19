import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskTitleFilter',
  pure: false
})
export class TaskTitleFilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propertyName: string): any {
    if (
      value.length === 0 ||
      filterString === '' ||
      filterString === undefined
    ) {
      return value;
    }
    let filteredArray = [];

    for (let item of value) {
      if(
        item[propertyName].toLowerCase().startsWith(filterString.toLowerCase())
      )
        {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  }

}
