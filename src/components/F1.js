import "./style.css";

function F1()
{

    const myStyle = {
        color:"blue",
        backgroundColor:"black"
    }


    return(
        <div>
            <h2 style={{color:"red",marginLeft:"300px"}}>Inline style</h2>
            <h2 style={myStyle}>Internal style</h2>
            <h2 class="c1">External style</h2>
            <h2 class="text-center text-success bg-dark">Bootstrap style</h2>
        </div>
    )
}

export default F1;