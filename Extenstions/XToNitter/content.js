// Redirect the URL
if (window.location.hostname === 'twitter.com') {
    window.location.href = 'https://nitter.net' + window.location.pathname; // Nitter has (almost) 1:1 URL structure so it's easy to redirect
}