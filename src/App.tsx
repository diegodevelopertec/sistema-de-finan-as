import { useState,useEffect } from 'react'
import * as C from './app.style'
import { Category } from './types/category'
import { Item } from './types/types'
import { Items } from './data/items'
import { Categories } from './data/categories'
import { FilterListByMonth, getCurrentMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea'


const App=()=>{

const [List,setList]=useState(Items)
const [filteredList,setFilteredList]=useState<Item[]>([])
const [currentMonth,setCurrentMonth]=useState(getCurrentMonth())


useEffect(()=>{
    setFilteredList(FilterListByMonth(List,currentMonth))

},[List,setCurrentMonth])

return (<>
    <C.Container>
      <C.Header>
              <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      
    </C.Container>

    <C.Body>
    <TableArea list={filteredList}/>


    </C.Body>




</>)





}

export default App