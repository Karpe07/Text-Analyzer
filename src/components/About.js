import React, { useState } from "react";

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",
    //     border: "1px solid black"
    // })
    
    let myStyle = {
        color : props.mode === 'dark'?'white':'#535c64',
        backgroundColor : props.mode === 'dark'?'#535c64':'white',
        border : props.mode == 'dark'?'1px solid white':'1px solid black'
    }

    return (
        <div className="container" style={myStyle}>
            <h2>About Us</h2>
            <div className="accordion accordion-flush my-4" id="accordionFlushExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={myStyle}>
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Text Analyzer is the best way to Analyze your text quickly and efficiently. we can do operations like as changing the case of text, text-to-speak or many more!</div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={myStyle}>
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Text-Analyzer is totally free to use. We have not imposing any charges for the same</div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={myStyle}>
                            <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Text-analyzer is designed in such a way that it is compatible with any browser. so that you seemlessly use it without any hessitation</div>
                    </div>
                </div>

            </div>
        </div>
    )
}