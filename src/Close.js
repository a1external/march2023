import { useState, useTransition } from 'react';
import "./App.css"
let data = 25 + '%'
let eff = 25 + '%'
const Close = () => {
    const [bus, setbus] = useState(data)
    const [effect, seteffect] = useState()
    const [trans, settrans] = useState("none")
    const close = () => {

        if (bus == 0) {
            setbus(data)
            console.log("double click here")

        }
        else {
            setbus(0)
            if (bus == eff) {
                seteffect(0)
                settrans("none")

            }
        }

    }


    const peffect = () => {

        if (bus == 0) {
            setbus(data)
            seteffect(eff)

        }
        else {
            setbus(0)

        }

    }
    const submit = () => {

        if (bus == 0) {
            setbus(data)
            seteffect(eff)
            settrans("block")

        }
        else {
            setbus(0)


        }

    }
    const fullwidth = () => {
        let c = 100 + '%'
        if (bus == 0) {
            setbus(c)
            console.log("i 1 clicked")

        }
        else {
            setbus(0)

        }
    }







    return (
        <>
<div class="scroller">
            <div className="ssidenav" style={{ '--width': bus }}>
                <button id="close" onClick={close} >X</button>
                <img src="https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=400" alt="girl in jacket" id="avtar"></img>
                <ul id="sidenav">
                    <li><a href="#" target="_blank">Home</a></li>
                    <li><a href="#" target="_blank">About</a></li>
                    <li><a href="#" target="_blank">contact</a></li>
                    <li><a href="#" target="_blank">services</a></li>
                </ul>
            </div>


            <div className="content" style={{ 'margin-left': effect }}>
                <div className="total" style={{ 'display': trans }}> </div>
                <h1>first web site of css</h1>
                <button onClick={close}  >overlay Effect</button>
                <button onClick={peffect} >push Effect</button>
                <button onClick={submit}>push Effect opacityeffect </button>
                <button onClick={fullwidth}>full width effect</button>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.

                    Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.

                    Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word,
                    Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word,
                    Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors, including Pages and Microsoft Word,
                    </p>

            </div>
            </div>
        </>
    )
}
export default Close;