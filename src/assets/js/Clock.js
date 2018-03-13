setInterval(function() {
    var current = new Date();
    var seconds = current.getHours() * 3600 + current.getMinutes() * 60 + current.getSeconds();
  
    var hourRotate = "rotate(" + ((seconds % 43200) * 360 / 43200 + 180) + "deg)";
    var minuteRotate = "rotate(" + ((seconds % 3600) * 360 / 3600 + 180) + "deg)";
    var secondRotate = "rotate(" + ((seconds % 60) * 360 / 60 + 180) + "deg)";
  
    // $(".hour").css("transform", hourRotate);
    // $(".minute").css("transform", minuteRotate);
    // $(".second").css("transform", secondRotate);
  
  }, 1000);