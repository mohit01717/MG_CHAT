export const getUser = async ()=>{
    try{
        const res = await fetch("http://localhost:3000");
        const data = await res.json();
        return data.users;
    }
    catch(err){
        console.log(err);
    }
}
