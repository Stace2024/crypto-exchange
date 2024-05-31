const apiUrl = "https://api.coincap.io/v2";

export const getAssets = async () => {
    const response = await fetch(`${apiUrl}/assets`);
    return await response.json();

    

}