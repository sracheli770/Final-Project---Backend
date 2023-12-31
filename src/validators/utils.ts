const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const passwordRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[#?!@$%^&*-]){10,30}/;

const urlRegex = /^https?:\/\/(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?:\/\/(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,}$/;

const phoneRegex = /^\d{2,3}-\d{7}$/;

export { urlRegex, phoneRegex, emailRegex, passwordRegex }