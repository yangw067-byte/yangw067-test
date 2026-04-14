// Set deployment date from GitHub Actions workflow
document.addEventListener('DOMContentLoaded', function () {
    updateDeploymentDate();
    updatePipelineTimestamps();

    // Add event listener to the update button
    document.getElementById('update-btn').addEventListener('click', function () {
        animatePipeline();
    });
});

// Update the deployment date
function updateDeploymentDate() {
    if (typeof DEPLOYMENT_INFO !== 'undefined') {
        const deployDate = new Date(DEPLOYMENT_INFO.date);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        };
        document.getElementById('deploy-date').textContent = deployDate.toLocaleDateString('en-US', options);
    } else {
        // Fallback to current time if deployment info not available
        const now = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        document.getElementById('deploy-date').textContent = now.toLocaleDateString('en-US', options);
    }
}

// Update pipeline stage timestamps
function updatePipelineTimestamps() {
    if (typeof DEPLOYMENT_INFO !== 'undefined' && DEPLOYMENT_INFO.timestamps) {
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };

        const stages = ['code', 'test', 'build', 'deploy'];
        stages.forEach(stage => {
            const timestamp = DEPLOYMENT_INFO.timestamps[stage];
            if (timestamp) {
                const date = new Date(timestamp);
                const timeString = date.toLocaleTimeString('en-US', timeOptions);
                const element = document.getElementById(stage + '-time');
                if (element) {
                    element.textContent = timeString;
                }
            }
        });
    }
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
