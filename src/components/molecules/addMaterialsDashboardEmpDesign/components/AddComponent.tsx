import { Button, Popconfirm } from "antd"

const AddComponent=()=>{
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

export default AddComponent