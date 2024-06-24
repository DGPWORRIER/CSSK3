    document.addEventListener('DOMContentLoaded', function () {
        const text = "Your Event, Our Passion";
        let index = 0;
        const speed = 100; // Adjust typing speed here (milliseconds)

        function type() {
            if (index < text.length) {
                document.getElementById("typed-text").textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }

        type();
    });

