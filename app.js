document.querySelectorAll('#country-buttons .btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const c = btn.getAttribute('data-country');
    alert('Country selected: ' + c + '\n(Next: add city buttons, then summary/categories.)');
  });
});