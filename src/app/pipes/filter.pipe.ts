import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterPipe'
})

export class FilterPipe implements PipeTransform {
    transform (arrayToFilter: any[], searchTerm: string): any {
        console.log('serach term: ', searchTerm);
        if ( arrayToFilter === [] || searchTerm === '') {
            return arrayToFilter;
        }
        const filteredArr = [];
        for (const item of arrayToFilter){
            if (item.status === searchTerm) {
                filteredArr.push(item);
            }
        }
        return filteredArr;
    }
}
