javascript:(
  function(){
    const page = document.getElementById("yDmH0d");
    const header = document.getElementsByClassName("pGxpHc")[0];
    const topBar = document.getElementsByClassName("D1OdOb")[0].firstChild;
    const sideBar = document.getElementsByClassName("CYaQr")[0];
    const messageButton = document.getElementsByClassName("PpCYDb")[0];
    const views = document.getElementsByClassName("Nadu4b")[0];
    const footer = document.getElementsByClassName("M8UUXb")[0];
    const assigned = document.getElementsByClassName("EIDWfc")[0];

    const pageHeight = page.style.height;
    const pageWidth = page.style.width;
    const headerDisplay = header.style.display;
    const topBarDisplay = header.style.display;
    const sideBarDisplay = sideBar.style.display;
    const messageButtonDisplay = messageButton.style.display;
    const viewsDisplay = views.style.display;
    const footerDisplay = views.style.display;
    const assignedDisplay = assigned.style.display;

    page.style.height = "auto";
    page.style.width = "auto";
    header.style.display = "none";
    topBar.style.display = "none";
    sideBar.style.display = "none";
    messageButton.style.display = "none";
    views.style.display = "none";
    footer.style.display = "none";
    assigned.style.display = "none";

    window.print();

    page.style.height = pageHeight;
    page.style.width = pageWidth;
    header.style.display = headerDisplay;
    topBar.style.display = topBarDisplay;
    sideBar.style.display = sideBarDisplay;
    messageButton.style.display = messageButtonDisplay;
    views.style.display = viewsDisplay;
    footer.style.display = footerDisplay;
    assigned.style.display = assignedDisplay;
  }
)();
