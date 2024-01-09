import { Button, Popconfirm } from "antd"

const AddComponentType =()=>{
    
    const description = ()=>{
        return(
            <>
            
            </>
        )
    }
    const callConfirm =() =>{
        console.log("submitted")
    }

    return(
        <>
         <Popconfirm
            placement="bottom"
            title="Add Component Type"
            icon
            description={description}
            okText="Submit"
            onConfirm={callConfirm}
            cancelText="No"
        >
            <Button>Add Component type</Button>
        </Popconfirm>
      </>
    )
}

export default AddComponentType