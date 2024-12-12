// TypeScript-like typing with JSDoc comments
/**
 * Handle form submission
 * @param {Event} event - The form submission event
 */

const handleSubmit = (event: Event): void => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Type-safe DOM elements
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const periodInput = document.getElementById('period') as HTMLInputElement;
    const contentInput = document.getElementById('content') as HTMLTextAreaElement;

    // Collect values
    const name: string = nameInput.value.trim();
    const email: string = emailInput.value.trim();
    const period: string = periodInput.value.trim();
    const content: string = contentInput.value.trim();

    // Validation
    if (!name || !email || !period || !content) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    // Display confirmation
    alert(`Form submitted successfully!\n\nName: ${name}\nEmail: ${email}\nPeriod of Stay: ${period}\nContent: ${content}`);

    // Clear the form
    const form = document.getElementById('stayRequestForm') as HTMLFormElement;
    form.reset();
};

// Add event listener
const formElement = document.getElementById('stayRequestForm') as HTMLFormElement;
formElement.addEventListener('submit', handleSubmit);

export default handleSubmit;