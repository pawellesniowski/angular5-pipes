import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'shorten'
})

export class ShortenPipe implements PipeTransform {
    transform(valueToTransform: any, limit, cutHere) {
        return valueToTransform.length >= limit ? valueToTransform.substr(0, cutHere) + ' ...' : valueToTransform;
    }
}
