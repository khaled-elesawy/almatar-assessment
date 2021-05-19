import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupNameFilter',
  pure: false
})
export class GroupNameFilterPipe implements PipeTransform {

  transform(value: any[], filteredGroup: string, propertyName: string): any {
    if (
      value.length === 0 ||
      filteredGroup === '' ||
      filteredGroup === undefined
    ) {
      return value;
    }
    let filteredArray = [];

    for (let item of value) {
      if(
        item[propertyName] === filteredGroup
      )
        {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  }

}
