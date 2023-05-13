import axios from 'axios';

const BASE_URL ="https://api.themoviedb.org/3";
const TMBD_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTRmODJmYzYwN2RlMjMwNzZhYjQxMDI1N2YxMjVmZCIsInN1YiI6IjY0NWIyN2IzNmFhOGUwMDE3MzgxN2IwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zbLU1MkAeL0d6pseFf3pSJp3RU5iDnyPCNmpE87W_HM";
const headers={
    Authorization: "bearer " + TMBD_TOKEN,
    accept: 'application/json'
};

export const fetchDataFromApi=async(url,params)=>{
    try{
const {data}= await axios.get(BASE_URL + url,{
    headers,
    params,
})
return data;
    }
    catch(err){
            console.log(err);
            return err;
        }
}