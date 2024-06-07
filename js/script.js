
  function startCountdown(duration) {
    const countdownElement = {
      days: document.getElementById('days'),
      hours: document.getElementById('hours'),
      minutes: document.getElementById('minutes'),
      seconds: document.getElementById('seconds'),
    };

    let time = duration;
    
    function updateCountdown() {
      const days = Math.floor(time / (24 * 60 * 60));
      const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((time % (60 * 60)) / 60);
      const seconds = Math.floor(time % 60);

      countdownElement.days.textContent = days;
      countdownElement.hours.textContent = String(hours).padStart(2, '0');
      countdownElement.minutes.textContent = String(minutes).padStart(2, '0');
      countdownElement.seconds.textContent = String(seconds).padStart(2, '0');

      if (time > 0) {
        time--;
        setTimeout(updateCountdown, 1000);
      }
    }

    updateCountdown();
  }

  // Set the countdown duration in seconds (e.g., 1 day = 86400 seconds)
  const countdownDuration = 86400; // 1 day in seconds
  startCountdown(countdownDuration);

