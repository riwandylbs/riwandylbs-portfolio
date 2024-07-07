import Navbar from "./scenes/Navbar"
import DotGroup from "./scenes/DotGroup"
import Landing from "./scenes/Landing"
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery"

function App() {
  const [selectedPage, setSelectedPage] = useState("home")
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true) 
      if (window.scrollY !== 0) setIsTopOfPage(false) 
    }

    window.addEventListener("scroll", handleScroll)

    // every useEffect return is expecting for clean up function, so return () => "result" is a clean up functions
    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
    </div>
  );
}

export default App;
