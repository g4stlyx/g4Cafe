function Footer() {

    const footerStyle = {
        backgroundColor: "#FF2200", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        textAlign: "center", 
        height: "50px",
        width:"100%",
        position:"relative",
        bottom:0,
    }


    return (
        <div style={footerStyle}>
            Copyright 2023 &copy; gSoftw4re - All Rights Reserved.
        </div>
    )
}

export default Footer