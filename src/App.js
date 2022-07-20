import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navabr, Footer, Sidebar, ThemeSettings, Navbar } from './components';
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Line,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  ColorPicker,
  Editor,
} from './pages';
import { checksContext } from './context/ContextProvider';
import AppDetails from './pages/appDetails/AppDetails';
function App() {
  const {
    activeMenu,
    themeSetting,
    setthemeSetting,
    currentColorSelected,
    currentMode,
  } = checksContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 " style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3  hover:drop-shadow-xl
            text-white
            "
                onClick={() => setthemeSetting(true)}
                style={{
                  background: currentColorSelected,
                  borderRadius: '50%',
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-60 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen  w-full
              ${activeMenu ? 'md:ml-60   ' : 'flex-2'}`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              {themeSetting && <ThemeSettings />}

              <Routes>
                <Route path="/" element={<Ecommerce />} />
                <Route path="/dashboard" element={<Ecommerce />} />

                <Route path="/apps" element={<Orders />} />
                <Route path="/score" element={<Employees />} />
                <Route path="/ranking" element={<Customers />} />

                {/* <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} /> */}

                <Route path="/appdetails" element={<AppDetails />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
