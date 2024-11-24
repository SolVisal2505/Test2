// Hard code Event --------<
let events = [
    { id: 1, name: "Example Event 1", startDate: "2024-07-01", endDate: "2024-08-01", location: "Phnom Penh", status: "ended" },
    { id: 2, name: "Mobile Legend M6 Series", startDate: "2024-12-22", endDate: "2024-12-31", location: "Veng Sreng", status: "active" },
    { id: 3, name: "Web Design Bootcamp", startDate: "2025-01-01", endDate: "2025-02-31", location: "Wat Phnom", status: "pending" }
];
// Hard code Event -------->

// Display event ---------<
function displayEvents(filteredEvents = events) { 
    const table = document.getElementById('eventTable');
    table.innerHTML = '';
    filteredEvents.forEach(event => {
        table.innerHTML += `
            <tr>
                <td>${event.id}</td>
                <td>${event.name}</td>
                <td>${event.startDate}</td>
                <td>${event.endDate}</td>
                <td>${event.location}</td>
                <td><span class="status ${event.status}">${capitalize(event.status)}</span></td>
                <td class="actions">
                    <button class="view-btn" onclick="viewEvent(${event.id})">View</button>
                    <button class="edit-btn" onclick="editEvent(${event.id})">Edit</button>
                    <button class="delete-btn" onclick="deleteEvent(${event.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}
// Display event --------->

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Search event
function searchEvents() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredEvents = events.filter(event => event.name.toLowerCase().includes(query));
    displayEvents(filteredEvents);
}

// Add or create event
function addEvent() {
    const name = document.getElementById('newName').value;
    const startDate = document.getElementById('newStartDate').value;
    const endDate = document.getElementById('newEndDate').value;
    const location = document.getElementById('newLocation').value;
    const status = document.getElementById('newStatus').value;

    if (name && startDate && endDate && location && status) {
        const newEvent = {
            id: events.length + 1,
            name,
            startDate,
            endDate,
            location,
            status
        };
        events.push(newEvent);
        displayEvents();
        document.getElementById('newName').value = '';
        document.getElementById('newStartDate').value = '';
        document.getElementById('newEndDate').value = '';
        document.getElementById('newLocation').value = '';
        document.getElementById('newStatus').value = 'active';
    } else {
        alert('Please fill in all fields');
    }
}

// View
function viewEvent() {
    if (confirm('Do you want to view this event?')){
        window.location.href = "#.html";
    } else {}
}

// Edit
function editEvent(id) {
    const event = events.find(event => event.id === id);
    document.getElementById('editId').value = event.id;
    document.getElementById('editName').value = event.name;
    document.getElementById('editStartDate').value = event.startDate;
    document.getElementById('editEndDate').value = event.endDate;
    document.getElementById('editLocation').value = event.location;
    document.getElementById('editStatus').value = event.status;
    document.getElementById('editForm').style.display = 'block';
}

// Save edit after edied
function saveEdit() {
    const id = parseInt(document.getElementById('editId').value);
    const name = document.getElementById('editName').value;
    const startDate = document.getElementById('editStartDate').value;
    const endDate = document.getElementById('editEndDate').value;
    const location = document.getElementById('editLocation').value;
    const status = document.getElementById('editStatus').value;

    const event = events.find(event => event.id === id);
    event.name = name;
    event.startDate = startDate;
    event.endDate = endDate;
    event.location = location;
    event.status = status;

    document.getElementById('editForm').style.display = 'none';
    displayEvents();
}

// Delete
function deleteEvent(id) {
    events = events.filter(event => event.id !== id);
    displayEvents();
}

displayEvents();
