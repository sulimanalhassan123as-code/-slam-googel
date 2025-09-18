document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      window.location.href = `mailto:suleiman@example.com?subject=Islamic%20Google%20Contact&body=${encodeURIComponent(message)}%0AFrom:%20${email}`;
    });
  }
});
