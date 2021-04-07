import React from "react"

function Footer(){
    var date = new Date();
    var currYear = date.getFullYear();
    return (
        <footer>
            <p>
                Copyright {currYear}
            </p>
        </footer>
    )
}

export default Footer