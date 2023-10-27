import Header from "./Header/Header";
import {Routes, Route, Navigate} from "react-router-dom";
import tabs from "../tabs.json";
import LazyLoadComponent from "./LazyLoadComponent/LazyLoadComponent";

function App() {
  return (
    <div className="App">
        <Header />
        <main>
            <Routes>
                {tabs.map(({id, path}) => (
                    <Route key={id} path={id} element={<LazyLoadComponent path={path} />}/>
                ))}
                <Route index element={<Navigate to={tabs[0].id} />} />
                <Route path="*" element={<Navigate to={tabs[0].id} />} />
            </Routes>
        </main>
    </div>
  );
}

export default App;
