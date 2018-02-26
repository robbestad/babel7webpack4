import React from "react"
import ReactDOM from "react-dom"
import App from "./app"

const render = Root => {
	ReactDOM.render(<App />,
		document.getElementById("root")
	)
}

render(App)
