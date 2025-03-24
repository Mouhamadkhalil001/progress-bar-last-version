document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const water = document.getElementById('water');
    const progressText = document.getElementById('progressText');
    const progressCircle = document.getElementById('progressCircle');
    
    // Initialize progress value
    let progress = 0;
    
    // Target percentage to fill
    const targetProgress = 70;
    
    // Timing configuration
    const incrementStep = 1; // 1% per step
    const incrementInterval = 10; // 10ms per step
    
    // Function to update the progress display
    function updateProgress(percent) {
        // Update the text
        progressText.textContent = `${percent}%`;
        
        // Update the water height
        water.style.height = `${percent}%`;
        
        // Change text color based on water level
        if (percent > 30) {
            progressText.style.color = "#fff"; // White text when water level is higher
            progressText.style.textShadow = "0 0 3px rgba(0, 0, 0, 0.5)"; // Shadow to make it readable
        } else {
            progressText.style.color = "#333"; // Dark text when water level is lower
            progressText.style.textShadow = "0 0 5px rgba(255, 255, 255, 0.7)";
        }
    }
    
    // Initialize with 0%
    updateProgress(0);
    
    // Start the incremental progress
    const timer = setInterval(() => {
        // Increment progress
        progress += incrementStep;
        
        // Update the display
        updateProgress(progress);
        
        // Check if we've reached the target
        if (progress >= targetProgress) {
            clearInterval(timer);
        }
    }, incrementInterval);
    
    // Optional: Add click effect to restart animation
    progressCircle.addEventListener('click', function() {
        progress = 0;
        updateProgress(0);
        
        // Restart the animation
        const restartTimer = setInterval(() => {
            progress += incrementStep;
            updateProgress(progress);
            
            if (progress >= targetProgress) {
                clearInterval(restartTimer);
            }
        }, incrementInterval);
    });
});