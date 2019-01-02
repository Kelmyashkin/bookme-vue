export type WeekDays = 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';

export default class AvailDay {
  public day: WeekDays;
  public isDisable: boolean;
  public from: string;
  public to: string;

  constructor(day: WeekDays) {
    this.day = day;
    this.isDisable = false;
    this.from = '9:00 AM';
    this.to = '5:00 PM';
  }
}
