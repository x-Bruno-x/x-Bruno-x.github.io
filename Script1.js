// JavaScript source code
async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

        document.getElementById('user-image').src = user.picture.large;
        document.getElementById('user-name').textContent = `${user.name.first} ${user.name.last}`;
        document.getElementById('user-email').textContent = user.email;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}


window.onload = fetchRandomUser;
