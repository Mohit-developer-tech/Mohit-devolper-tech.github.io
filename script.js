const doctors = [
    {
        id: 1,
        name: "Dr. Anjali Sharma",
        specialty: "Cardiologist",
        experience: "15 years",
        location: "Ruby Hall Clinic, Pune",
        availability: "Mon-Fri 10:00 AM - 2:00 PM"
    },
    {
        id: 2,
        name: "Dr. Rajesh Patel",
        specialty: "Dermatologist",
        experience: "8 years",
        location: "Jupiter Hospital, Pune",
        availability: "Tue-Sat 12:00 PM - 5:00 PM"
    },
    {
        id: 3,
        name: "Dr. Meera Kulkarni",
        specialty: "Pediatrician",
        experience: "10 years",
        location: "Sahyadri Hospital, Pune",
        availability: "Mon-Sat 9:00 AM - 1:00 PM"
    },
    {
        id: 4,
        name: "Dr. Arun Deshmukh",
        specialty: "Orthopedic Surgeon",
        experience: "12 years",
        location: "Deenanath Mangeshkar Hospital, Pune",
        availability: "Mon-Fri 11:00 AM - 4:00 PM"
    },
    {
        id: 5,
        name: "Dr. Pooja Naik",
        specialty: "Gynecologist",
        experience: "20 years",
        location: "Jehangir Hospital, Pune",
        availability: "Mon-Wed 10:00 AM - 3:00 PM"
    }
];

// Example code to insert doctors into the select dropdown in your HTML
const doctorSelect = document.getElementById('doctor-select');
doctors.forEach(doctor => {
    const option = document.createElement('option');
    option.value = doctor.id;
    option.textContent = `${doctor.name} - ${doctor.specialty}`;
    doctorSelect.appendChild(option);
});
