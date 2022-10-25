export const checkStatus = (response) => {
    if (response.status === 200) {
        return response
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export const pareJSON = async (response) => {
    return await response.json();
}