import React from "react"
import ReactDOM from"react-dom"
import "./style.css"

function App() {
    // const thingsArray = ["Thing 1", "Thing 2"]
    const[thingsArray , setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    function addItem() {
        // const newThingText = `Thing ${thingsArray.length + 1}`
        // thingsArray.push(newThingText)
        // document.getElementById()
        // console.log(thingsArray)
        // let newValue = thingsArray.push(`Thing ${thingsArray.length + 1}`)

        //Note: we can not use push with state since push changes the thingsArray
        setThingsArray(oldValue => [...oldValue, `Thing ${oldValue.length + 1}`])
    }
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));