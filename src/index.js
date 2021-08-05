class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timer();
  }

  getRefs() {
    const timerRef = document.querySelector(this.selector);
    return {
      days: timerRef.querySelector('[data-value="days"]'),
      hours: timerRef.querySelector('[data-value="hours"]'),
      mins: timerRef.querySelector('[data-value="mins"]'),
      secs: timerRef.querySelector('[data-value="secs"]'),
      timer: timerRef.querySelector('#timer-1'),
    };
  }
  timer() {
    setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = this.targetDate - currentDate;
      this.updateClock(deltaTime);
    }, 1000);
  }

  updateClock(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.getRefs().days.textContent = days;
    this.getRefs().hours.textContent = hours;
    this.getRefs().mins.textContent = mins;
    this.getRefs().secs.textContent = secs;
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}
const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2022'),
});
