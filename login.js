// Smooth scrolling for navigation links
function goToLoginPage() {
  window.location.href = "file:///C:/Users/naga0/OneDrive/Desktop/WEB/join.html"; // Replace "login.html" with your actual login page URL
}
function goToAboutUs() {
  window.location.href ="file:///C:/Users/naga0/OneDrive/Desktop/WEB/About.html"; // Replace "login.html" with your actual login page URL
}
function goToClass() {
  window.location.href ="file:///C:/Users/naga0/OneDrive/Desktop/WEB/class.html"; // Replace "login.html" with your actual login page URL
}

file:///C:/Users/naga0/OneDrive/Desktop/WEB/class.html

document.querySelectorAll('.social-icons a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        alert(`Redirecting to ${event.target.innerText}`);
    });
});
// Adding hover effect to class items
document.querySelectorAll('.class-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = "scale(1.2)";
        item.style.transition = "transform 0.3s";
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = "scale(1)";
    });
});