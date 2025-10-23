class date {
  date: Date;
  DayInString: String | null = null;
  constructor() {
    this.date = new Date();
    setInterval(() => {
      this.date = new Date();
      this.DayInString = this.getDayInString(this.date);
    }, 100);
  }
  getDayInString(date: Date) {
    const DayInString: string[] = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    return DayInString[date.getDay()];
  }
}

export default new date();
