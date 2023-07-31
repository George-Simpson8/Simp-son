


const btn = document.getElementById("toggle")
const theme = document.querySelector("#theme-link");

//listener for a click on the button
btn.addEventListener("click",function() {
    
   //if the current URL contain "light-theme.css"
   if(theme.getAttribute("href")=="Dash.css") {
    //then switch it to dark mode
    theme.href = "darktheme.css";

    //otherwise

   }else{
      theme.href = "Dash.css";
   }
   
});


