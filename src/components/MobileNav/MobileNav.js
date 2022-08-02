import React, { useState } from "react"
import MobileNavButton from "./MobileNavButton"
import MobileNavDrawer from "./MobileNavDrawer"

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <MobileNavButton toggleDrawer={handleToggleDrawer} isOpen={isOpen} />
      <MobileNavDrawer
        toggleDrawer={handleToggleDrawer}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  )
}

export default MobileNav
