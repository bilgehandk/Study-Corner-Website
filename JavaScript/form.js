$(document).ready(function() {
    $('#contactForm').submit(function(event) {
      event.preventDefault(); 
  
      // Get the form data
      var formData = $(this).serialize();
  
      
      $.ajax({
        type: 'POST',
        url: 'process_form.php', 
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

