document.addEventListener('DOMContentLoaded', async function() {
    const linksContainer = document.getElementById('linksContainer');

    try {
        // Fetch links data from JSON file
        const response = await fetch('links.json');
        const data = await response.json();
        const linksData = data.links;

        // Create and display links
        linksData.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.target = '_blank';
            linkElement.rel = 'noopener noreferrer';
            linkElement.className = 'link-item';
            linkElement.innerHTML = `
                <span class="link-icon">${link.icon}</span>
                <span class="link-title">${link.title}</span>
            `;
            linksContainer.appendChild(linkElement);
        });

    } catch (error) {
        console.error('Error loading links data:', error);
        linksContainer.innerHTML = '<div class="error">Error loading links. Please try again later.</div>';
    }
});
