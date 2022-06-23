import { Item } from "../types/types"


export const  getCurrentMonth=()=>{
    let now=new Date()
    return `${now.getFullYear()} - ${now.getMonth()+1}}`


}

export const FilterListByMonth=(list:Item[],date:string):Item[]=>{

        let newList:Item[]=[]
    let [year,minth]= date.split('-')






        return newList



}