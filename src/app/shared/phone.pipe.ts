import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "phone"
})
export class PhonePipe implements PipeTransform {
  transform(rawNum) {
    const result = (rawNum.slice(0, 3) + ' ' + rawNum.slice(3, 6) + ' ' + rawNum.slice(6, 10));
    return result;
  }
}
