const SideBar = (props)=>{
    // console.log({props})

    return(
        <div className="sidebar">
            {props.data}
            {props?.children }
            </div>
    )
}
export default SideBar;