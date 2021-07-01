const DEAFULT_URL = "https://localhost:44375"
export const PostData = async (url, data={})=>{
    const res = await fetch(`${DEAFULT_URL}${url}`, {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return res.json();
}

