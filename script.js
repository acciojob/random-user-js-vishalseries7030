//your code here
const userImg = document.getElementById("user-img");
const userName = document.getElementById("user-name");
const info = document.getElementById("info");
const buttons = document.querySelectorAll("[data-attr]");
const getUserBtn = document.getElementById("getUser");

let currentUser = null;

// Fetch user
async function fetchUser() {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();

    currentUser = data.results[0];

    // Set image & name
    userImg.src = currentUser.picture.large;
    userName.textContent =
        currentUser.name.first + " " + currentUser.name.last;

    // Clear old info
    info.textContent = "";
}

// Button click (Age, Email, Phone)
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const attr = btn.getAttribute("data-attr");

        if (!currentUser) return;

        if (attr === "age") {
            info.textContent = currentUser.dob.age;
        } else if (attr === "email") {
            info.textContent = currentUser.email;
        } else if (attr === "phone") {
            info.textContent = currentUser.phone;
        }
    });
});

// Get new user
getUserBtn.addEventListener("click", fetchUser);

// Initial load
fetchUser();