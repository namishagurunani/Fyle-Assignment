$(document).ready(function() {
    // Show the modal when the "Contact Us" button is clicked
    $('#contactUsBtn').click(function() {
        $('#contactUsModal').modal('show');
    });

    // Handle form submission
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Check if the terms checkbox is checked
        if (!$('#terms').is(':checked')) {
            alert('You must agree to the terms and conditions.');
            return;
        }

        // Get the form data
        var formData = $(this).serialize();

        // Getform.io endpoint
        var getformEndpoint = 'https://getform.io/f/pbmqemkb'; // Replace with your Getform.io endpoint

        // Send the form data to the Getform.io endpoint
        $.ajax({
            url: getformEndpoint,
            method: 'POST',
            data: formData,
            success: function(response) {
                // Show a success message
                alert("Thank you for contacting us!");

                // Close the modal
                $('#contactUsModal').modal('hide');

                // Reset the form
                $('#contactForm')[0].reset();
            },
            error: function(xhr, status, error) {
                // Show an error message
                alert("There was an error submitting your form. Please try again.");
                console.error("Error: " + error);
                console.error("Status: " + status);
                console.dir(xhr);
            }
        });
    });

    // Handle click event for "Read More" button
    $(document).on('click', '.read-more-btn', function() {
        // Open the specified URL in a new tab
        window.open('https://fylehq.com', '_blank');
    });

    // Add overlay content dynamically to each image container in the second slide
    $('#whatWeDoCarousel .image-container').each(function() {
        var overlay = `
            <div class="overlay">
                <div class="page-content">
                <i class="far fa-file-code icon-size"></i>
                    <h1 class="lead">Web Development</h1>
                    <p class="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
                    <button class="btn bg-white text-danger read-more-btn">Read More &#8594</button>
                </div>
            </div>
        `;
        $(this).append(overlay);
    });

     // Function to handle text item click
     $('.text-item').click(function() {
        // Remove 'active' class from all text items
        $('.text-item').removeClass('active');
        
        // Add 'active' class to the clicked text item
        $(this).addClass('active');
        
        // Get the data-image attribute value of the clicked text item
        var imageSrc = $(this).data('image');
        
        // Set the src attribute of the dynamic image
        $('#dynamicImage').attr('src', imageSrc);
    });
});
