import ReactDOM from "react-dom"
import App from "./app"

const render = Root => {
	ReactDOM.render(Root,
		document.getElementById("root")
	)
}

render(App)
