import { Button, Popconfirm } from "antd"

const AddItem =()=>{
    const text ="sdsdd"
    const description = "sdfsdfsdffff"
    return(
        <>
         <Popconfirm
            placement="bottom"
            title={text}
            description={description}
            okText="Yes"
            cancelText="No"
        >
            <Button>Bottom</Button>
        </Popconfirm>
      </>
    )
}

export default AddItem