document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/sheets') // Fetch data from the Vercel API
        .then(response => response.json())
        .then(data => {
            // Check if data is valid and contains values
            if (data.values && data.values.length > 0) {
                const headerRow = document.getElementById('header-row');
                const dataBody = document.getElementById('data-body');

                // Create table headers from the first row of the sheet
                data.values[0].forEach(header => {
                    const th = document.createElement('th');
                    th.textContent = header;
                    headerRow.appendChild(th);
                });

                // Create table rows from the data
                for (let i = 1; i < data.values.length; i++) {
                    const tr = document.createElement('tr');
                    data.values[i].forEach(cell => {
                        const td = document.createElement('td');
                        td.textContent = cell;
                        tr.appendChild(td);
                    });
                    dataBody.appendChild(tr);
                }
            } else {
                console.error('No data found in the sheet');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
