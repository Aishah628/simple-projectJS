var linkedin = document.querySelector('.link-linkedin');
var gethub = document.querySelector('.link-gethub');
var behance = document.querySelector('.link-behance');
var email = document.querySelector('.link-email');
var subscribeButton = document.querySelector('.button-subscribe');
var messageButton = document.querySelector('.button-message');  
linkedin.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/Aishah-A-H-Aljohani', '_blank');
});
gethub.addEventListener('click', function() {
    window.open('https://github.com/Aishah628', '_blank');
});
behance.addEventListener('click', function() {
    window.open('https://www.behance.net/yosha3', '_blank');
});
email.addEventListener('click', function() {
    window.location.href = 'https://mail.google.com/mail/aishah44308';
});
subscribeButton.addEventListener('click', function() {
   window.location.href = 'https://www.linkedin.com/in/Aishah-A-H-Aljohani';
});
messageButton.addEventListener('click', function() {
    window.location.href = 'https://mail.google.com/mail/aishah44308';
});