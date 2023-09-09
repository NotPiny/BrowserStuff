const ignoredPaths = [ // Paths that should be ignored
    '/home',
    '/compose/tweet',
    '/settings',
    '/notifications',
    '/messages',
    '/i/bookmarks'
];
const customMappings = [
    {
        twitter: '/explore',
        nitter: '/search'
    }
]
// Redirect the URL if the path is available on Nitter

// Applies on website load
if (window.location.hostname === 'twitter.com' && !ignoredPaths.includes(window.location.pathname)) {
    // If custom mapping is available, use it
    if (customMappings.find(mapping => mapping.twitter === window.location.pathname)) {
        const mapping = customMappings.find(mapping => mapping.twitter === window.location.pathname);
        window.location.href = 'https://nitter.net' + mapping.nitter;
    }

    // If custom mapping is not available, use default
    window.location.href = 'https://nitter.net' + window.location.pathname;
}

// Applies on URL change
window.addEventListener('click', () => {
    // If a button or smth is clicked, check if the URL should be redirected

    if (window.location.hostname === 'twitter.com' && !ignoredPaths.includes(window.location.pathname)) {
        // If custom mapping is available, use it
        if (customMappings.find(mapping => mapping.twitter === window.location.pathname)) {
            const mapping = customMappings.find(mapping => mapping.twitter === window.location.pathname);
            window.location.href = 'https://nitter.net' + mapping.nitter;
        }

        // If custom mapping is not available, use default
        window.location.href = 'https://nitter.net' + window.location.pathname;
    }
})