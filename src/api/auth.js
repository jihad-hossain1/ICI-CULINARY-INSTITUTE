export const saveUser = user => {
    const currentUser = {
        email: user.email,
        image: user.photoURL,
        name: user.displayName,


    }
    fetch(`${import.meta.env.VITE_BASE_URL}/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    }).then(res => res.json())
        .then(data => {
            console.log(data);
        })
}