document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = document.querySelectorAll(".team-member");

    teamMembers.forEach(member => {
        member.addEventListener("click", function () {
            const bio = this.querySelector(".bio");
            if (bio.style.display === "block") {
                bio.style.display = "none";
            } else {
                bio.style.display = "block";
            }
        });
    });
});