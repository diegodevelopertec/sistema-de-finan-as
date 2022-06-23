import { useState,useEffect } from 'react'
import * as C from './app.style'
import { Category } from './types/category'
import { Item } from './types/types'
import { Items } from './data/items'
import { Categories } from './data/categories'
import { getCurrentMonth } from './helpers/dateFilter'

const App=()=>{

const [List,setList]=useState(Items)
const [filteredList,setFilteredList]=useState<Item[]>([])
const [currentMonth,setCurrentMonth]=useState(getCurrentMonth())


useEffect(()=>{


},[List,setCurrentMonth])

return (<>
    <C.Container>
      <C.Header>
              <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      
    </C.Container>

    <C.Body>
xx


    </C.Body>




</>)





}

export default App