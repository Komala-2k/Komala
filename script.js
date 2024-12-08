// Modal information data
const modalData = {
    culture: {
        title: "Karnataka's Rich Culture",
        content: `Karnataka's cultural heritage is a vibrant tapestry of art, music, and traditions. 
        The state is home to various classical dance forms like Yakshagana, a traditional theater form 
        that combines dance, music, dialogue, costume, make-up, and stage techniques. The state also 
        celebrates numerous festivals throughout the year, including the grand Mysore Dasara.`,
        image: "images/culture-detail.jpg"
    },
    tourism: {
        title: "Tourist Attractions",
        content: `From the magnificent Mysore Palace to the ancient ruins of Hampi, Karnataka offers 
        diverse tourist destinations. The state boasts pristine beaches along its coastal belt, 
        dense forests in the Western Ghats, and architectural marvels like the Gol Gumbaz in Bijapur. 
        Popular destinations include Coorg, Badami Caves, and the tech hub of Bangalore.`,
        image: "images/tourism-detail.jpg"
    },
    cuisine: {
        title: "Karnataka's Cuisine",
        content: `Karnataka's cuisine is as diverse as its culture. Famous dishes include Mysore Masala Dosa, 
        Bisi Bele Bath, and Dharwad Peda. Each region has its specialties - coastal Karnataka is famous for 
        seafood, while North Karnataka is known for its spicy curries. The state is also famous for its 
        filter coffee and various types of dosas.`,
        image: "images/cuisine-detail.jpg"
    }
};

// Show information in modal
function showInfo(section) {
    const modal = document.getElementById('infoModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const modalImage = document.getElementById('modalImage');
    const data = modalData[section];

    modalTitle.textContent = data.title;
    modalContent.textContent = data.content;
    modalImage.src = data.image;
    modalImage.alt = `${section} in Karnataka`;
    
    modal.style.display = 'block';
}

// Close modal when clicking the close button or outside the modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('infoModal');
    const closeBtn = document.querySelector('.close-btn');

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            alert(`Thank you for your message, ${name}!\nWe will contact you at ${email} soon.`);
            contactForm.reset();
        });
    }
});


    // Google Maps Integration
    function initMap() {
        // Karnataka center coordinates
        const karnataka = { lat: 15.3173, lng: 75.7139 };
        
        // Create map
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: karnataka,
            styles: [
                {
                    featureType: "all",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#7c93a3" }]
                }
            ]
        });
    
        // Tourist locations
        const locations = [
            {
                position: { lat: 12.2958, lng: 76.6394 },
                title: "Mysore Palace",
                info: "One of the most magnificent palaces in India"
            },
            {
                position: { lat: 15.3350, lng: 76.4600 },
                title: "Hampi",
                info: "UNESCO World Heritage Site with ancient ruins"
            },
            {
                position: { lat: 12.9716, lng: 77.5946 },
                title: "Bangalore",
                info: "Silicon Valley of India"
            },
            {
                position: { lat: 14.2244, lng: 74.8333 },
                title: "Jog Falls",
                info: "Second highest plunge waterfall in India"
            },
            {
                position: { lat: 12.4244, lng: 75.7382 },
                title: "Coorg",
                info: "Scotland of India"
            }
        ];
    
        // Add markers and info windows
        locations.forEach(loc => {
            const marker = new google.maps.Marker({
                position: loc.position,
                map: map,
                title: loc.title,
                animation: google.maps.Animation.DROP
            });
    
            const infowindow = new google.maps.InfoWindow({
                content: `<div class="info-window">
                            <h3>${loc.title}</h3>
                            <p>${loc.info}</p>
                         </div>`
            });
    
            marker.addListener("click", () => {
                infowindow.open(map, marker);
            });
        });
    }// Google Maps Integration
    let map;
    let activeInfoWindow = null;
    
    const tourismLocations = [
        {
            position: { lat: 12.2958, lng: 76.6394 },
            title: "Mysore Palace",
            info: "One of the most magnificent palaces in India",
            type: "heritage"
        },
        {
            position: { lat: 15.3350, lng: 76.4600 },
            title: "Hampi",
            info: "UNESCO World Heritage Site with ancient ruins",
            type: "heritage"
        },
        {
            position: { lat: 12.9716, lng: 77.5946 },
            title: "Bangalore",
            info: "Silicon Valley of India",
            type: "city"
        },
        {
            position: { lat: 14.2244, lng: 74.8333 },
            title: "Jog Falls",
            info: "Second highest plunge waterfall in India",
            type: "nature"
        },
        {
            position: { lat: 12.4244, lng: 75.7382 },
            title: "Coorg",
            info: "Scotland of India",
            type: "nature"
        },
        {
            position: { lat: 14.2419, lng: 74.4442 },
            title: "Gokarna",
            info: "Temple town with pristine beaches",
            type: "spiritual"
        },
        {
            position: { lat: 13.0098, lng: 75.2885 },
            title: "Chikmagalur",
            info: "Coffee country of Karnataka",
            type: "nature"
        },
        {
            position: { lat: 15.8497, lng: 74.4977 },
            title: "Gol Gumbaz",
            info: "Second largest dome in the world",
            type: "heritage"
        }
    ];
    
    function initMap() {
        // Karnataka center coordinates
        const karnataka = { lat: 15.3173, lng: 75.7139 };
        
        // Create map with custom styling
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: karnataka,
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true,
            styles: [
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
                },
                {
                    featureType: "landscape",
                    elementType: "geometry",
                    stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{ color: "#dedede" }, { lightness: 21 }]
                }
            ]
        });
    
        // Add markers for all locations
        tourismLocations.forEach(location => {
            const marker = new google.maps.Marker({
                position: location.position,
                map: map,
                title: location.title,
                animation: google.maps.Animation.DROP
            });
    
            // Create info window with enhanced content
            const infowindow = new google.maps.InfoWindow({
                content: `
                    <div class="info-window">
                        <h3>${location.title}</h3>
                        <p>${location.info}</p>
                        <p style="color: #ff6b6b; margin-top: 5px;">Type: ${location.type}</p>
                    </div>
                `
            });
    
            // Add click listener to marker
            marker.addListener("click", () => {
                // Close previously opened info window
                if (activeInfoWindow) {
                    activeInfoWindow.close();
                }
                
                // Open new info window
                infowindow.open(map, marker);
                activeInfoWindow = infowindow;
    
                // Bounce animation
                marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(() => {
                    marker.setAnimation(null);
                }, 750);
            });
        });
    
        // Add custom controls
        addCustomControls(map);
    }
    
    function addCustomControls(map) {
        // Create the DIV to hold the control
        const centerControlDiv = document.createElement("div");
        
        // Center on Karnataka button
        const centerButton = document.createElement("button");
        centerButton.style.backgroundColor = "#fff";
        centerButton.style.border = "2px solid #ff6b6b";
        centerButton.style.borderRadius = "3px";
        centerButton.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
        centerButton.style.color = "#ff6b6b";
        centerButton.style.cursor = "pointer";
        centerButton.style.margin = "10px";
        centerButton.style.padding = "10px";
        centerButton.style.textAlign = "center";
        centerButton.textContent = "Center on Karnataka";
        centerButton.title = "Click to center the map";
        
        centerButton.addEventListener("click", () => {
            map.setCenter({ lat: 15.3173, lng: 75.7139 });
            map.setZoom(7);
        });
    
        centerControlDiv.appendChild(centerButton);
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
    }

