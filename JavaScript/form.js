$(document).ready(function() {
    $('#contactForm').submit(function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the form data
      var formData = $(this).serialize();
  
      // Send an AJAX request to handle form submission
      $.ajax({
        type: 'POST',
        url: 'process_form.php', // Replace with the URL to your server-side script to process the form
        data: formData,
        success: function(response) {
          // Display a success message
          $('#contactForm').html('<div class="alert alert-success">Thank you for your message!</div>');
        },
        error: function(xhr, status, error) {
          // Display an error message
          $('#contactForm').html('<div class="alert alert-danger">An error occurred. Please try again later.</div>');
        }
      });
    });
  });

