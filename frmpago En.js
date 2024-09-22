
function showNotification() {
    var alertBox = document.getElementById('custom-alert');
    alertBox.classList.add('show');

   
    setTimeout(function() {
        alertBox.classList.remove('show');
        
        location.href = 'index EN.html';
    }, 2500); 
}

