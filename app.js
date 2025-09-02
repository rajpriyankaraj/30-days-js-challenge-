const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('input[type="button"]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;

    if (value === 'AC') {
      display.value = '';
    } else if (value === 'DC') {
      display.value = display.value.slice(0, -1);
    } else if (value === '=') {
      try {
        display.value = eval(display.value) || '';
      } catch (e) {
        display.value = 'Error';
      }
    } else {
      if (display.value === '0' || display.value === 'Error') {
        display.value = value;
      } else {
        display.value += value;
      }
    }
  });
});
