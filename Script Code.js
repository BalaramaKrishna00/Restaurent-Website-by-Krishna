<script>
document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.querySelector('.about-text');
    const aboutTitle = document.querySelector('.about-title'); // Target the about-title div
    const text = `I'm Krishna, a web developer with a Master’s in Computer Applications. I thrive on learning something new every day and love tackling complex challenges. My passion lies in creating seamless, engaging digital experiences that stand out. I believe that creativity is the key to innovation, and I enjoy bringing fresh ideas to every project I undertake. With a keen eye for detail and a drive to excel, I'm eager to collaborate and contribute to building meaningful web solutions. Looking forward to creating something great together!`;
    const words = text.split(' '); // Split text into words
    let animationStarted = false; // Flag to prevent the animation from restarting

    function animateText() {
        words.forEach((word, index) => {
            const wordSpan = document.createElement('span');
            wordSpan.textContent = word; // Set word text content
            wordSpan.style.position = 'relative'; // Make it position relative for animation
            wordSpan.style.opacity = 0; // Start with hidden word
            wordSpan.style.marginRight = '5px'; // Add space between words

            // Random initial positions
            const randomDirection = Math.floor(Math.random() * 4); // 0: left, 1: right, 2: top, 3: bottom
            const offset = 600; // Distance from the initial position

            switch (randomDirection) {
                case 0: // From left
                    wordSpan.style.transform = `translateX(-${offset}px)`;
                    break;
                case 1: // From right
                    wordSpan.style.transform = `translateX(${offset}px)`;
                    break;
                case 2: // From top
                    wordSpan.style.transform = `translateY(-${offset}px)`;
                    break;
                case 3: // From bottom
                    wordSpan.style.transform = `translateY(${offset}px)`;
                    break;
            }

            textElement.appendChild(wordSpan);

            // Delay the animation for each word
            setTimeout(() => {
                wordSpan.style.opacity = 1; // Fade in
                wordSpan.style.transform = 'translateX(0) translateY(0)'; // Move to the correct position
                wordSpan.style.transition = 'transform 1s ease-out, opacity 1s ease-out'; // Smooth transition
            }, index * 300); // Staggered effect with each word
        });
    }

    // Intersection Observer to trigger the animation when about-title is visible
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animationStarted) {
                animationStarted = true; // Set the flag to true to prevent restarting the animation
                animateText(); // Start the text animation
                observer.unobserve(entry.target); // Stop observing once animation starts
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed (0.1 means 10% of the element is visible)

    observer.observe(aboutTitle); // Start observing the about-title div
});
</script>