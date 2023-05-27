<script>
    function initMap() {
        // Specify the coordinates for the center of the map
        const mapCenter = { lat: 40.712776, lng: -74.005974 };

        // Create a new map instance
        const map = new google.maps.Map(document.getElementById("map"), {
            center: mapCenter,
            zoom: 12,
        });

        // Add a marker to the map
        const marker = new google.maps.Marker({
            position: mapCenter,
            map: map,
            title: "Our Location",
        });
    }
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
