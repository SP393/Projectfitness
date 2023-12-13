// Function to open a Facebook share dialog
function shareOnFacebook() {
    const postUrl = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;
    openShareDialog(facebookUrl);
}

// Function to open a Twitter share dialog
function shareOnTwitter() {
    const postUrl = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(document.title)}`;
    openShareDialog(twitterUrl);
}

// Function to open a share dialog window
function openShareDialog(url) {
    // Adjust window dimensions as needed
    const width = 600;
    const height = 400;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    // Open a new window for sharing
    window.open(url, 'Share', `width=${width}, height=${height}, left=${left}, top=${top}`);
}

// Function for hamburger navigation bar
function hamburger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
