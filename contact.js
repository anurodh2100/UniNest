document.addEventListener('DOMContentLoaded', function() {
    const hostellerSelect = document.getElementById('hosteller');
    const hostellerDetails = document.getElementById('hosteller-details');
    const roomTypeSelect = document.getElementById('room-type');
    const otherRoomTypeInput = document.getElementById('other-type');

    // Event listener for hosteller selection
    hostellerSelect.addEventListener('change', function() {
        if (this.value === 'yes') {
            hostellerDetails.style.display = 'block';
        } else {
            hostellerDetails.style.display = 'none';
        }
    });

    // Event listener for room type selection
    roomTypeSelect.addEventListener('change', function() {
        if (this.value === 'other') {
            otherRoomTypeInput.style.display = 'block';
        } else {
            otherRoomTypeInput.style.display = 'none';
        }
    });
});
