//your JS code here. If required.
function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        // Async function to display message after delay
        async function displayMessageWithDelay(message, delayMs) {
            const outputDiv = document.getElementById('output');
            const submitButton = document.getElementById('btn');
            
            // Show loading state
            outputDiv.textContent = `Waiting ${delayMs}ms to display message...`;
            outputDiv.className = 'loading';
            submitButton.disabled = true;
            submitButton.textContent = 'Please wait...';
            
            try {
                // Wait for the specified delay using await
                await sleep(delayMs);
                
                // Display the message after the delay
                outputDiv.textContent = message;
                outputDiv.className = 'message';
            } catch (error) {
                outputDiv.textContent = 'An error occurred while displaying the message.';
                outputDiv.className = '';
            } finally {
                // Re-enable the submit button
                submitButton.disabled = false;
                submitButton.textContent = 'Submit';
            }
        }

        // Event handler for the submit button
        async function handleSubmit() {
            const textInput = document.getElementById('text');
            const delayInput = document.getElementById('delay');
            const outputDiv = document.getElementById('output');
            
            const message = textInput.value.trim();
            const delay = parseInt(delayInput.value);
            
            // Validate inputs
            if (!message) {
                outputDiv.textContent = 'Please enter a message.';
                outputDiv.className = '';
                return;
            }
            
            if (isNaN(delay) || delay < 0) {
                outputDiv.textContent = 'Please enter a valid delay (0 or greater).';
                outputDiv.className = '';
                return;
            }
            
            // Call the async function to display message with delay
            await displayMessageWithDelay(message, delay);
        }

        // Add event listener to the submit button
        document.getElementById('btn').addEventListener('click', handleSubmit);

        // Allow Enter key to submit from text input
        document.getElementById('text').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSubmit();
            }
        });

        // Allow Enter key to submit from delay input
        document.getElementById('delay').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSubmit();
            }
        });