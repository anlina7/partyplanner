let partyData = {
    date: '',
    description: '',
    message: '',
    guests: []
  };
  
  const partyForm = document.getElementById('partyForm');
  const guestForm = document.getElementById('guestForm');
  const inviteSection = document.getElementById('inviteSection');
  const inviteDetails = document.getElementById('inviteDetails');
  const guestList = document.getElementById('guestList');
  
  // Save party details
  partyForm.addEventListener('submit', function (e) {
    e.preventDefault();
    partyData.date = document.getElementById('partyDate').value;
    partyData.description = document.getElementById('partyDescription').value;
    partyData.message = document.getElementById('inviteMessage').value;
  
    renderInvite();
    inviteSection.classList.remove('hidden');
  });
  
  // Handle guest RSVP
  guestForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('guestName').value.trim();
    const surname = document.getElementById('guestSurname').value.trim();
  
    if (name && surname) {
      partyData.guests.push({ name, surname });
      renderGuestList();
      guestForm.reset();
    }
  });
  
  // Render the invite message
  function renderInvite() {
    inviteDetails.innerHTML = `
      <p><strong>Date:</strong> ${partyData.date}</p>
      <p><strong>Description:</strong> ${partyData.description}</p>
      <p><strong>Message:</strong> ${partyData.message}</p>
    `;
  }
  
  // Render the guest list
  function renderGuestList() {
    guestList.innerHTML = '';
    partyData.guests.forEach((guest, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${guest.name} ${guest.surname}`;
      guestList.appendChild(li);
    });
  }