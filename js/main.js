// Interactive Background & Cursor Sparks

// Add blob layer
document.addEventListener('DOMContentLoaded', () => {
    const blobs = document.createElement('div');
    blobs.className = 'background-blobs';
    document.body.prepend(blobs);
});

let lastSparkTime = 0;

document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        const x = `${(e.clientX / window.innerWidth) * 100}%`;
        const y = `${(e.clientY / window.innerHeight) * 100}%`;
        document.body.style.setProperty('--mouse-x', x);
        document.body.style.setProperty('--mouse-y', y);
        
        const now = Date.now();
        if (now - lastSparkTime > 30) {
            createSpark(e.clientX, e.clientY);
            lastSparkTime = now;
        }
    });
});

function createSpark(x, y) {
    const spark = document.createElement('div');
    spark.className = 'cursor-spark';
    spark.style.left = (x - 3) + 'px';
    spark.style.top = (y - 3) + 'px';
    
    // Neon green or soft rose
    spark.style.backgroundColor = Math.random() > 0.5 ? 'var(--spark-neon)' : 'var(--spark-rose)';
    document.body.appendChild(spark);
    
    // Force reflow
    void spark.offsetWidth;
    
    // Animate
    spark.style.transform = `translate(${(Math.random() - 0.5) * 80}px, ${(Math.random() - 0.5) * 80}px) scale(0)`;
    spark.style.opacity = '0';
    
    setTimeout(() => {
        spark.remove();
    }, 600);
}
