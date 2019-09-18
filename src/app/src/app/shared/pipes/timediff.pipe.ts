import { Pipe, PipeTransform } from '@angular/core';
import * as  moment from 'moment';
import { DatePipe } from '@angular/common';

@Pipe({ name: 'timediff' })
export class FilterPipe implements PipeTransform {
  transform(input_time_stamp) {
    var currentTimeStamp = moment(Date.now());
    var years = currentTimeStamp.diff(input_time_stamp, 'years')
    var days = currentTimeStamp.diff(input_time_stamp, 'days');
    var min = currentTimeStamp.diff(input_time_stamp, 'minutes');
    var hours = currentTimeStamp.diff(input_time_stamp, 'hours');
    var date_format_text = '';
    if (min === 0) {
      date_format_text = 'Few seconds ago';
    } else if (hours === 0 && min > 0) {
      if (min === 1) {
        date_format_text = min + ' ' + 'minute ago';
      } else {
        date_format_text = min + ' ' + 'minutes ago';
      }
    } else if (days === 0 && hours > 0) {
      date_format_text = hours + ' ' + 'hr' + ' ' + (min % 60) + ' ' + 'minutes ago';
    } else if (days > 0) {
      if (days === 1) {
        date_format_text = days + ' ' + 'day ago';
      } else if (days > 1 && days <= 7) {
        date_format_text = days + ' ' + 'days ago';
      } else {
        var datePipe = new DatePipe('en-US');
        date_format_text = datePipe.transform(input_time_stamp, 'MMM d, y');
      }
    }
    return date_format_text;
  };
}