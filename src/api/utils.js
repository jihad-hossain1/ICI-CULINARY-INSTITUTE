// update room status
export const updateStatus = async (id, status) => {
    const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/student/status/${id}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ status }),
        }
    )
    const data = await response.json()
    return data
}