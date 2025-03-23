
async function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const pin = document.getElementById('pin').value;

    const res = await fetch('/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password, pin })
    });
    const data = await res.json();
    alert(data.msg);
}

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const res = await fetch('/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    alert(data.msg);
}
