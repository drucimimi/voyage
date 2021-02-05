function newContent(){
    let screenSize = window.screen.width;
    if (screenSize <= 1024){
      document.open();
      document.write("<p>Le site n'est pas compatible avec les appareils mobiles.</p>");
      document.close(); 
    }  
  }