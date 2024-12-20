import { Component } from '@angular/core';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.scss']
})
export class ZooComponent {
  activeDate: string = '';
  acSelected = true;
  weekDates: string[] = [];

  ngOnInit() {
    this.setCurrentDate();
    this.generateWeekDates();
  }
  setCurrentDate() {
    const today = new Date();

    const day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(today).toUpperCase();
    const date = today.getDate();
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(today).toUpperCase();

    this.activeDate = `${day} ${date} ${month}`;
  }
  generateWeekDates() {
    const today = new Date();
    this.weekDates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      return this.formatDate(date);
    });
  }
  formatDate(date: Date): string {
    const day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date).toUpperCase();
    const dayNum = date.getDate();
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date).toUpperCase();
    return `${day}<br>${dayNum}<br>${month}`;
  }

  toggleAC(selected: boolean) {
    this.acSelected = selected;
  }

  selectDate(date: string) {
    this.activeDate = date;
  }

  addTicket(type: string) {
    console.log(`Added ticket for: ${type}`);
  }

}
