document.querySelectorAll(".rickroll-link").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    });
});

