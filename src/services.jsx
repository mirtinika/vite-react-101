export const fetchConfig = async () => {
    const response = await fetch('https://621e1817849220b1fc8f37a5.mockapi.io/config')
    const data = await response.json()
    return data[0]
}