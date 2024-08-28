 // Sample data
 const incidents = [
    {id: 1, type: "Ransomware attacks", sector: "Finance", severity: "High", description: "According to a Sophos report, nearly 64% of Indian organizations surveyed in 2023 were hit by ransomware attacks. The report also noted that while the attack rates decreased year-on-year, the impact on victims increased.",Time:"23 oct 2019 2:00pm"},
    {id: 2, type: "Data Leak", sector: "Security", severity: "Medium", description: "Telangana Police data leak: 20-year-old hacker raises six serious questions",Time:"23 oct 2019 2:00pm"},
    {id: 3, type: "DDoS", sector: "Government", severity: "Critical", description: "DDoS attack on government website.",Time:"23 oct 2019 2:00pm"},
    {id: 4, type: "Phishing", sector: "Healthcare", severity: "High", description: "Phishing attack targeting healthcare workers.",Time:"23 oct 2019 2:00pm"}
];

// Populate latest incidents
const incidentList = document.getElementById("incidentList");
incidents.forEach(incident => {
    const listItem = document.createElement("li");
    listItem.textContent = `${incident.type} - ${incident.description} (${incident.Time}) `;
    listItem.addEventListener("click", () => showIncidentDetail(incident));
    incidentList.appendChild(listItem);
});


// Show incident details
function showIncidentDetail(incident) {
    const incidentDetail = document.getElementById("incidentDetail");
    incidentDetail.innerHTML = `
        <h3>${incident.type} - ${incident.severity}</h3>
        <p><strong>Sector:</strong> ${incident.sector}</p>
        <p><strong>Description:</strong> ${incident.description}</p>
    `;
}

// Chart.js example charts
const threatCategoriesCtx = document.getElementById('threatCategoriesChart').getContext('2d');
const affectedSectorsCtx = document.getElementById('affectedSectorsChart').getContext('2d');
const severityLevelsCtx = document.getElementById('severityLevelsChart').getContext('2d');

const threatCategoriesChart = new Chart(threatCategoriesCtx, {
    type: 'pie',
    data: {
        labels: ['Malware', 'Phishing', 'DDoS', 'APTs'],
        datasets: [{
            data: [40, 30, 20, 10],
            backgroundColor: ['#e74c3c', '#f39c12', '#2980b9', '#8e44ad']
        }]
    }
});

const affectedSectorsChart = new Chart(affectedSectorsCtx, {
    type: 'bar',
    data: {
        labels: ['Finance', 'Healthcare', 'Government'],
        datasets: [{
            data: [30, 50, 20],
            backgroundColor: ['#27ae60', '#f39c12', '#2980b9']
        }]
    }
});

const severityLevelsChart = new Chart(severityLevelsCtx, {
    type: 'doughnut',
    data: {
        labels: ['Low', 'Medium', 'High', 'Critical'],
        datasets: [{
            data: [20, 30, 30, 20],
            backgroundColor: ['#2ecc71', '#f1c40f', '#e67e22', '#e74c3c']
        }]
    }
});
