const body = document.querySelector("body");

const submitData = (name, email) => {
    const userObj = {
        "name": name,
        "email": email
    }
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userObj)
    })
    .then(response => response.json())
    .then(data => {
        body.append(data.id);
    })
    .catch(err => body.append(err))
}