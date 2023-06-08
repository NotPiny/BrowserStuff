// Redirect the URL
if (window.location.hostname === 'www.curseforge.com') {
    const newPath = window.location.pathname + window.location.search + window.location.hash;
    window.location.href = 'https://legacy.curseforge.com' + newPath;
}