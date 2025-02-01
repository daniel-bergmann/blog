document.addEventListener("DOMContentLoaded", function () {
  const darkModeButton = document.getElementById("toggle-dark-mode")
  const body = document.body
  const backToTopButton = document.getElementById("back-to-top")
  // Check dark mode preference
  const darkModeEnabled = localStorage.getItem("dark-mode") === "true"
  // Set initial theme and button text
  if (darkModeEnabled) {
    body.setAttribute("data-theme", "dark")
    darkModeButton.textContent = "Light"
  } else {
    darkModeButton.textContent = "Dark"
  }
  // Toggle dark mode on button click
  darkModeButton.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "dark") {
      body.removeAttribute("data-theme")
      localStorage.setItem("dark-mode", "false")
      darkModeButton.textContent = "Dark"
    } else {
      body.setAttribute("data-theme", "dark")
      localStorage.setItem("dark-mode", "true")
      darkModeButton.textContent = "Light"
    }
  })
  // Back to Top Button Functionality
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block"
    } else {
      backToTopButton.style.display = "none"
    }
  })
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
  // Set current year in
  const yearSpan = document.getElementById("current-year")
  const currentYear = new Date().getFullYear()
  yearSpan.textContent = currentYear
  // Smooth scrolling for Table of Contents
  document.querySelectorAll("#toc a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault() // Prevent default anchor click behavior
      const targetId = link.getAttribute("href").substring(1) // Get target ID
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const headerOffset = 80 // Adjust this value based on header's height
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })
  const mainContent = document.querySelector("main")
  voice(mainContent)
})
