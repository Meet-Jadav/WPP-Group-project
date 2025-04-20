document.addEventListener("DOMContentLoaded", () => {
  const yearInput = document.querySelector("input[type='text']");
  const exploreButton = document.querySelector("button");

  // Function to handle opening the page
  const handleExplore = () => {
    const year = yearInput.value.trim();

    // Validate the input
    if (!year || isNaN(year) || year.length !== 4 || year < 2000 || year > 2025) {
      alert("Please enter a valid 4-digit year between 2000 and 2025.");
      return;
    }

    // Open the page corresponding to the entered year in a new tab
    window.open(`/Data By Years/${year}.html`,`_self`);
  };


  exploreButton.addEventListener("click", handleExplore);
  // this is for, when we press the enter.
  yearInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleExplore();
    }
  });
});