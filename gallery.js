// Function to open the modal and display the selected image and its caption
function openModal(imageUrl) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = imageUrl;
    modalImg.style.width = "auto"; // Reset width to allow natural size
    modalImg.style.height = "auto"; // Reset height to allow natural size
    modalImg.style.maxWidth = "80%"; // Limit maximum width of the image
    modalImg.style.maxHeight = "80%"; // Limit maximum height of the image
    modalImg.style.margin = "auto"; // Center the image horizontally
    captionText.innerHTML = image.dataset.caption; // Display caption

    // Close modal if clicked outside the image or press escape key
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
    
    // Close modal if the close button (X) is clicked
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
        closeModal();
    }
    
    // Close modal if escape key is pressed
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (event.key == 27) {
            closeModal();
        }
    };
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    
    // Reset event listeners
    window.onclick = null;
    document.onkeydown = null;
}

// Function to navigate to the previous or next image
function plusSlides(n) {
    var images = document.querySelectorAll(".gallery img");
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");
    var currentIndex = Array.from(images).findIndex(img => img.src === modalImg.src);
    var newIndex = currentIndex + n;
    if (newIndex < 0) {
        newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
        newIndex = 0;
    }
    modalImg.src = images[newIndex].src;
    captionText.innerHTML = images[newIndex].dataset.caption; // Display new caption
}