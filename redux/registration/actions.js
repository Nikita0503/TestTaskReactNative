export const CHANGE_EMAIL = 'REGISTRATION_CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'REGISTRATION_CHANGE_PASSWORD';
export const CHANGE_REPEAT_PASSWORD = 'REGISTRATION_CHANGE_REPEAT_PASSWORD';
export const CHANGE_NAME = 'REGISTRATION_CHANGE_NAME';
export const CHANGE_IS_ADMIN = 'CHANGE_IS_ADMIN';

export const setEmail = email => ({
    type: CHANGE_EMAIL,
    payload: email
});

export const setPassword = password => ({
    type: CHANGE_PASSWORD,
    payload: password
});

export const setRepeatPassword = password => ({
    type: CHANGE_REPEAT_PASSWORD,
    payload: password
});

export const setName = name => ({
    type: CHANGE_NAME,
    payload: name
});

export const switchIsAdmin = () => ({
    type: CHANGE_IS_ADMIN
})