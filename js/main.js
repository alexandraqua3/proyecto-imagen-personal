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

/* Page-level interactions (safe to run on any page) */
document.addEventListener('DOMContentLoaded', () => {
    // Card hover behaviour (add smooth transition if missing)
    document.querySelectorAll('.card').forEach(c => {
        if (!c.style.transition) c.style.transition = 'transform .22s ease';
        c.addEventListener('mouseenter', () => c.style.transform = 'translateY(-6px)');
        c.addEventListener('mouseleave', () => c.style.transform = 'translateY(0)');
    });

    // Stagger doodle animations if present
    document.querySelectorAll('.doodle').forEach((d, i) => {
        d.style.animationDelay = (i * 0.6) + 's';
    });

    // Randomize background doodle positions for more organic visual texture
    const bgDoodles = document.querySelectorAll('.background-doodle-pattern .bg-doodle');
    if (bgDoodles.length) {
        bgDoodles.forEach(d => {
            const x = 10 + Math.random() * 80;
            const y = 10 + Math.random() * 70;
            const rotation = -24 + Math.random() * 48;
            d.style.left = `${x}%`;
            d.style.top = `${y}%`;
            d.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
            d.style.opacity = `${0.48 + Math.random() * 0.34}`;
        });
    }

    // Navbar active link handling (graceful fallback)
    const links = document.querySelectorAll('.nav-link');
    if (links.length) {
        links.forEach(a => {
            try {
                const href = a.getAttribute('href') || '';
                if (location.pathname.endsWith(href) || (location.pathname.endsWith('/') && href.endsWith('index.html'))) {
                    a.classList.add('active');
                }
            } catch (e) {}
            a.addEventListener('click', () => {
                links.forEach(x => x.classList.remove('active'));
                a.classList.add('active');
            });
        });
    }

    // FAQ Accordion (página Preguntas Frecuentes)
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            if (!question || !answer) return;

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Cierra los demás ítems (acordeón exclusivo)
                faqItems.forEach(other => {
                    if (other !== item) {
                        other.classList.remove('active');
                        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                        other.querySelector('.faq-answer').style.maxHeight = null;
                    }
                });

                if (isActive) {
                    item.classList.remove('active');
                    question.setAttribute('aria-expanded', 'false');
                    answer.style.maxHeight = null;
                } else {
                    item.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        });

        // Abre la primera pregunta por defecto
        const firstItem = faqItems[0];
        firstItem.classList.add('active');
        firstItem.querySelector('.faq-question').setAttribute('aria-expanded', 'true');
        firstItem.querySelector('.faq-answer').style.maxHeight = firstItem.querySelector('.faq-answer').scrollHeight + 'px';
    }
});


