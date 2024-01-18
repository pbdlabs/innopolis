
import { useState } from "react"
import AddComponent from "./components/AddComponent"
import AddComponentType from "./components/AddComponentType"
import AddItem from "./components/AddItem"
import AddSpec from "./components/AddSpec"
import { Button } from "antd"

const AddMaterialsDashboardEmpDesign = () =>{
    const [openComponentType, setComponentType] = useState<boolean>(false)
    const [openAddItem, setAddItem] = useState<boolean>(false)
    const [openAddComponent, setAddComponent] = useState<boolean>(false)
    const [openAddSpec, setAddSpec] = useState<boolean>(false)
    
    return(
        <>
        <Button onClick={()=>setComponentType(true)}>Open Component Type</Button>
        <Button onClick={()=>setAddItem(true)}>Open Add Item</Button>
        <Button onClick={()=>setAddComponent(true)}>Open Component</Button>
        <Button onClick={()=>setAddSpec(true)}>Open Spec</Button>
        {openComponentType && <AddComponentType openComponentType= {openComponentType}  setComponentType={setComponentType}/>}
        {openAddItem && <AddItem setAddItem={setAddItem}  openAddItem={openAddItem}/>}
        {openAddComponent && <AddComponent openAddComponent={openAddComponent} setAddComponent={setAddComponent}/>}
        {openAddSpec && <AddSpec openAddSpec={openAddSpec}  setAddSpec={setAddSpec}/>}
        </>
    )
}

export default AddMaterialsDashboardEmpDesign