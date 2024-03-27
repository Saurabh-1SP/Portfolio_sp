const themeChange = (darkmode,setDarkmode) => {
    console.log(darkmode)
    const whitebg = document.querySelectorAll('.app__whitebg');
    const primarybg = document.querySelectorAll('.app__primarybg');
    const text = document.querySelectorAll('.p-text');
    const boldText = document.querySelectorAll('.bold-text');
    const headText = document.querySelectorAll('.head-text');
    const boxShadow = document.querySelectorAll('.box_shadow');
    const hoverBoxShadow = document.querySelectorAll('.hover_box_shadow');

    if(darkmode === false){
      setDarkmode(true);

      primarybg.forEach((item) => {
        item.classList.add('dark__secondarybg');
      });
      whitebg.forEach((item) => {
        item.classList.add('dark__primarybg');
      });
      text.forEach((item) => {
        item.classList.add('dark_text');
      });
      boldText.forEach((item) => {
        item.classList.add('dark_bold-text');
      });
      headText.forEach((item) => {
        item.classList.add('dark_head-text');
      });
      boxShadow.forEach((item) => {
        item.classList.add('dark_box_shadow');
      });
      hoverBoxShadow.forEach((item) => {
        item.classList.add('hover_dark_shadow');
      });
    } else{
      setDarkmode(false);
      
      whitebg.forEach((item) => {
        item.classList.remove('dark__primarybg');
      });
      primarybg.forEach((item) => {
        item.classList.remove('dark__secondarybg');
      });
      text.forEach((item) => {
        item.classList.remove('dark_text');
      });
      boldText.forEach((item) => {
        item.classList.remove('dark_bold-text');
      });
      headText.forEach((item) => {
        item.classList.remove('dark_head-text');
      });
      boxShadow.forEach((item) => {
        item.classList.remove('dark_box_shadow');
      });
      hoverBoxShadow.forEach((item) => {
        item.classList.remove('hover_dark_shadow');
      });
    }
}

export {
    themeChange
}