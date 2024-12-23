document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('downloadButton');
    const profiles = document.querySelectorAll('.profile');
    const csvDataElement = document.getElementById('csvData');

    downloadButton.addEventListener('click', function() {
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Name,Image URL\r\n"; // Header row

        profiles.forEach(profile => {
            const name = profile.querySelector('.profile-name').textContent.trim();
            const img = profile.querySelector('.profile-icon img');
            const imageUrl = img ? img.src : '';

            csvContent += `${name},${imageUrl}\r\n`;
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "profiles.csv");
        document.body.appendChild(link); // Required for Firefox

        link.click();
        document.body.removeChild(link);
    });
});