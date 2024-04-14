export const getUser = async ()=>{
    try{
        const res = await fetch("http://localhost:3000");
        const data = await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}

export const getUser_name = async (text)=>{
    try{
        const res = await fetch(`http://localhost:3000/search?q=${text}`);
        const data = await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}


