import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.tsx";
import "./assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import  globalReducer from "../src/utils/redux/golbalReducer.tsx";
const store = configureStore({
  reducer:{
    globalReducer
  }
})
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</StrictMode>,
);
