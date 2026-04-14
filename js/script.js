// Set current date as deployment date
document.addEventListener('DOMContentLoaded', function() {
    updateDeploymentDate();
    
    // Add event listener to the update button
    document.getElementById('update-btn').addEventListener('click', function() {
        updateDeploymentDate();
        animatePipeline();
    });
});

// Update the deployment date
function updateDeploymentDate() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const formattedDate = now.toLocaleDateString('en-US', options);
    document.getElementById('deploy-date').textContent = formattedDate;
}

// Animate the pipeline steps
function animatePipeline() {
    const steps = document.querySelectorAll('.pipeline-step');
    
    steps.forEach((step, index) => {
        // Reset any existing styles
        step.style.backgroundColor = '';
        step.style.color = '';
        
        // Animate each step with a delay
        setTimeout(() => {
            step.style.backgroundColor = '#3498db';
            step.style.color = 'white';
            
            // Reset after animation
            setTimeout(() => {
                step.style.backgroundColor = '';
                step.style.color = '';
            }, 1000);
        }, index * 500);
    });
}

// Easter egg - console message
console.log('%c 🚀 CI/CD Demo Website', 'font-size: 20px; font-weight: bold; color: #3498db;');
console.log('%c This site was deployed using GitHub Actions to AWS S3', 'font-size: 14px;');
