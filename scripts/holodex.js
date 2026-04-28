const API_KEY = 'bff5f168-d208-4fed-b6cf-c092aa373132';
const ORGS = ['Hololive', 'Nijisanji', 'Phase Connect'];

async function getLiveVtubers() {
    try {
        // only declare feed once, outside the loop
        const feed = document.getElementById('live-feed');

        for (const org of ORGS) {
            const response = await fetch(`https://holodex.net/api/v2/live?limit=3&org=${org}`, {
                headers: {
                    'X-APIKEY': API_KEY
                }
            });

            const streams = await response.json();

            // org label
            const orgLabel = document.createElement('p');
            orgLabel.className = 'org-label';
            orgLabel.textContent = org;
            feed.appendChild(orgLabel);

            if (streams.length === 0) {
                const empty = document.createElement('p');
                empty.className = 'no-streams';
                empty.textContent = 'No one is live right now.';
                feed.appendChild(empty);
                continue;
            }

            streams.forEach(stream => {
                const card = document.createElement('div');
                card.className = 'live-card';
                card.innerHTML = `
                    <img src="https://img.youtube.com/vi/${stream.id}/mqdefault.jpg"/>
                    <div class="live-info">
                        <p class="live-name">${stream.channel.name}</p>
                        <p class="live-title">${stream.title}</p>
                        <a class="watch-btn" href="https://youtube.com/watch?v=${stream.id}" target="_blank">Watch</a>
                    </div>
                `;
                feed.appendChild(card);
            });

        } // closes the for loop

    } catch (error) {
        console.error('Failed to fetch streams:', error);
        document.getElementById('live-feed').innerHTML = '<p class="no-streams">Could not load streams.</p>';
    }
}

getLiveVtubers();