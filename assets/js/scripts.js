$(function () {
  count = 0;
  wordsArray = ["Find what your passionate about", "Show the world what you can do", "Build lasting relationships", "Turn your dreams into reality"];
  setInterval(function () {
    $("#subtitle").fadeOut(700, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(700);
    });
    count++;
  }, 5000);
});