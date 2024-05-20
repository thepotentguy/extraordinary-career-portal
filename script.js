document.addEventListener('DOMContentLoaded', () => {
    const jobs = document.querySelectorAll('.job');

    jobs.forEach(job => {
        job.addEventListener('mouseover', () => {
            job.style.transform = 'translateY(-10px)';
        });

        job.addEventListener('mouseout', () => {
            job.style.transform = 'translateY(0)';
        });
    });
});
