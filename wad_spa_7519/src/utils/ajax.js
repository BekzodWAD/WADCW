const DEAFULT_URL = "https://localhost:44375"
export const PostData = async (url, data={}, callBack)=>{
    const res = await fetch(`${DEAFULT_URL}${url}`, {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res=>{
        if(callBack){
            callBack();
        }
        return res;
    })

    return res.json();
}

export const GetData = async url=>{
    return await fetch(`${DEAFULT_URL}${url}`).then(response => response.json());
}

export const DeleteData = async (url, callBack)=>{
    const res = await fetch(`${DEAFULT_URL}${url}`,{
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res=>{
        if(callBack){
          callBack();
        }
        return res;
    })
    return res.json();
}

export const PutData = async (url, data={}, callBack)=>{
    const res = await fetch(`${DEAFULT_URL}${url}`, {
        method: "put",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        if (callBack) {
            callBack();
        }
        return res;
    })

    return res.json();
}
