function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Users horey loo kaydiyay
    var users = [
        { email: "zahuur3311@gmail.com", password: "123" },
        { email: "zahra@example.com", password: "mypassword" }
    ];

    // Hubi haddii email & password sax yihiin
    var foundUser = users.find(user => user.email === email && user.password === password);

    if (!foundUser) {
        document.getElementById("error-message").textContent = "Email ama Password waa qalad!";
        return;
    }

    // Xasuuso user-ka & u gudub catalog.html
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    window.location.href = "catalog.html";
}
