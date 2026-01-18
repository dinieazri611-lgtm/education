<script>

<div class="datetime-container">
        <div id="time" class="time"></div>
        <div id="date" class="date"></div>
        <div id="day" class="day"></div>
    </div>
function updateClock() {
    const now = new Date();

    // JAM
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = hours < 10 ? '0'+hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;

    // TARIKH
    const day = now.getDate();
    const month = now.getMonth() + 1; // 0-11
    const year = now.getFullYear();
    const formattedDate = `${day < 10 ? '0'+day : day}-${month < 10 ? '0'+month : month}-${year}`;
    document.getElementById('date').textContent = formattedDate;

    // HARI
    const days = ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'];
    document.getElementById('day').textContent = days[now.getDay()];
}

// Update setiap saat
setInterval(updateClock, 1000);
updateClock(); // Panggil sekali untuk update terus
</script>
