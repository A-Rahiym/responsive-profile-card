// Avatar upload functionality (from Stage 0)
const avatarUpload = document.getElementById('avatar-upload');
const profileAvatar = document.querySelector('.profile-avatar');
const changeAvatarBtn = document.querySelector('.change-avatar');

if (avatarUpload && profileAvatar) {
    avatarUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileAvatar.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
}

// Current time display (from Stage 0)
const timeElement = document.getElementById('current-time');
if (timeElement) {
    function updateTime() {
        timeElement.textContent = Date.now();
    }
    updateTime();
    setInterval(updateTime, 1000);
}

// Contact form validation (Stage 1)
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    const fullNameInput = document.querySelector('[data-testid="test-contact-name"]');
    const emailInput = document.querySelector('[data-testid="test-contact-email"]');
    const subjectInput = document.querySelector('[data-testid="test-contact-subject"]');
    const messageInput = document.querySelector('[data-testid="test-contact-message"]');
    const successMessage = document.querySelector('[data-testid="test-contact-success"]');

    const errorName = document.querySelector('[data-testid="test-contact-error-name"]');
    const errorEmail = document.querySelector('[data-testid="test-contact-error-email"]');
    const errorSubject = document.querySelector('[data-testid="test-contact-error-subject"]');
    const errorMessage = document.querySelector('[data-testid="test-contact-error-message"]');

    // Clear error messages
    function clearError(errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    // Show error messages
    function showError(errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    // Email validation regex
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validate individual fields
    function validateField(input, errorElement, validationFn, errorMsg) {
        clearError(errorElement);
        if (!validationFn()) {
            showError(errorElement, errorMsg);
            return false;
        }
        return true;
    }

    // Real-time validation on blur
    fullNameInput.addEventListener('blur', function() {
        validateField(
            fullNameInput,
            errorName,
            () => fullNameInput.value.trim() !== '',
            'Full name is required.'
        );
    });

    emailInput.addEventListener('blur', function() {
        const value = emailInput.value.trim();
        if (value === '') {
            showError(errorEmail, 'Email is required.');
        } else if (!isValidEmail(value)) {
            showError(errorEmail, 'Please enter a valid email address.');
        } else {
            clearError(errorEmail);
        }
    });

    subjectInput.addEventListener('blur', function() {
        validateField(
            subjectInput,
            errorSubject,
            () => subjectInput.value.trim() !== '',
            'Subject is required.'
        );
    });

    messageInput.addEventListener('blur', function() {
        const value = messageInput.value.trim();
        if (value === '') {
            showError(errorMessage, 'Message is required.');
        } else if (value.length < 10) {
            showError(errorMessage, 'Message must be at least 10 characters long.');
        } else {
            clearError(errorMessage);
        }
    });

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Hide success message initially
        successMessage.style.display = 'none';

        // Clear all errors
        clearError(errorName);
        clearError(errorEmail);
        clearError(errorSubject);
        clearError(errorMessage);

        let isValid = true;

        // Validate full name
        if (fullNameInput.value.trim() === '') {
            showError(errorName, 'Full name is required.');
            isValid = false;
        }

        // Validate email
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            showError(errorEmail, 'Email is required.');
            isValid = false;
        } else if (!isValidEmail(emailValue)) {
            showError(errorEmail, 'Please enter a valid email address.');
            isValid = false;
        }

        // Validate subject
        if (subjectInput.value.trim() === '') {
            showError(errorSubject, 'Subject is required.');
            isValid = false;
        }

        // Validate message
        const messageValue = messageInput.value.trim();
        if (messageValue === '') {
            showError(errorMessage, 'Message is required.');
            isValid = false;
        } else if (messageValue.length < 10) {
            showError(errorMessage, 'Message must be at least 10 characters long.');
            isValid = false;
        }

        // If all validations pass
        if (isValid) {
            // Show success message
            successMessage.style.display = 'block';
            
            // Reset form
            contactForm.reset();

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        } else {
            // Focus on first error field
            if (fullNameInput.value.trim() === '') {
                fullNameInput.focus();
            } else if (emailValue === '' || !isValidEmail(emailValue)) {
                emailInput.focus();
            } else if (subjectInput.value.trim() === '') {
                subjectInput.focus();
            } else if (messageValue === '' || messageValue.length < 10) {
                messageInput.focus();
            }
        }
    });

    // Clear error when user starts typing
    fullNameInput.addEventListener('input', () => clearError(errorName));
    emailInput.addEventListener('input', () => clearError(errorEmail));
    subjectInput.addEventListener('input', () => clearError(errorSubject));
    messageInput.addEventListener('input', () => clearError(errorMessage));
}