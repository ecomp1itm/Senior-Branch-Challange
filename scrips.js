// This ensures the script runs only after the HTML is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript is successfully connected!");

    const checkboxes = document.querySelectorAll('.challenge-check');
    const totalDisplay = document.getElementById('current-total');
    const progressFill = document.getElementById('progress-fill');
    const MAX_POINTS = 500;

    function updateTracker() {
        let total = 0;

        checkboxes.forEach(box => {
            if (box.checked) {
                total += parseInt(box.getAttribute('data-points'));
                box.parentElement.classList.add('completed');
            } else {
                box.parentElement.classList.remove('completed');
            }
        });

        // Update the number text
        totalDisplay.innerText = total;

        // Update the progress bar width
        const percentage = (total / MAX_POINTS) * 100;
        progressFill.style.width = percentage + "%";
        
        console.log("Current Total:", total);
    }

    // Attach the event listener to every checkbox
    checkboxes.forEach(box => {
        box.addEventListener('change', updateTracker);
    });
});