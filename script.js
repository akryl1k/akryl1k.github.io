document.addEventListener('DOMContentLoaded', function() {
    const secretForm = document.getElementById('secretForm');
    const secretInput = document.getElementById('secretInput');

    secretInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the form from submitting normally
            
            const inputValue = secretInput.value.trim().toLowerCase();
            
            switch (inputValue) {
                case "packfolder":
                    window.location.href = "https://mega.nz/folder/so5ERZhS#q0hFEbMW0yXThzGG_DdZzg";
                    break;
                default:
                    window.location.href = "https://letmegooglethat.com/?q=" + inputValue;
            }
        }
    });
});
