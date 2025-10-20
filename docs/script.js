document.addEventListener("DOMContentLoaded", () => {
    // Profile Card Functionality
    const timeElement = document.getElementById("current-time");
    const avatar = document.querySelector('[data-testid="test-user-avatar"]');
    const uploadInput = document.getElementById("avatar-upload");

    // Only add event listener if uploadInput exists
    if (uploadInput) {
        uploadInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (file) {
                const url = URL.createObjectURL(file);
                avatar.src = url;
                avatar.alt = `Profile photo of ${file.name.split(".")[0]}`;
            }
        });
    }

    function updateTime() {
        requestAnimationFrame(() => {
            timeElement.textContent = Date.now();
            timeElement.style.opacity = 0.5;
            setTimeout(() => (timeElement.style.opacity = 1), 0);
        });
    }
    updateTime();
    setInterval(updateTime, 1000);

    // Contact Us Form Validation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const fullName = document.querySelector('[data-testid="test-contact-name"]');
            const email = document.querySelector('[data-testid="test-contact-email"]');
            const subject = document.querySelector('[data-testid="test-contact-subject"]');
            const message = document.querySelector('[data-testid="test-contact-message"]');
            const errors = {};

            // Reset error messages
            document.querySelectorAll('.error').forEach(error => error.textContent = '');

            // Validation
            if (!fullName.value.trim()) errors.name = "Full name is required.";
            if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) errors.email = "Valid email is required.";
            if (!subject.value.trim()) errors.subject = "Subject is required.";
            if (!message.value.trim() || message.value.length < 10) errors.message = "Message must be at least 10 characters.";

            // Display errors
            Object.keys(errors).forEach(key => {
                const errorElement = document.getElementById(`error-${key}`);
                if (errorElement) errorElement.textContent = errors[key];
            });

            if (Object.keys(errors).length === 0) {
                document.getElementById("success-message").style.display = "block";
                contactForm.reset();
                setTimeout(() => document.getElementById("success-message").style.display = "none", 5000);
            }
        });
    }
});