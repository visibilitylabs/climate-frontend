var userId = undefined;

export function getUserId() {
    console.log('get user id')
    if (userId === undefined) {
        userId = retrieveUserId();
    }
    return userId;
}

function generateUserId() {
    return Math.floor(Math.random() * 1000000000);
}

function retrieveUserId() {
    const userId = localStorage.getItem('userId');
    if (userId) {
        return userId;
    } else {
        const newUserId = generateUserId();
        localStorage.setItem('userId', newUserId);
        return newUserId;
    }
}