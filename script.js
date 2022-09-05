(function () {
    const secondsPerMilli = 1000;
    const minutesPerMilli = secondsPerMilli * 60;
    const hoursPerMilli = minutesPerMilli * 60;
    const daysPerMilli = hoursPerMilli * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    illFatedDate = new Date("09/05/2022 17:00:00")

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    

            distance = new Date().getTime() - illFatedDate;
  
            document.getElementById("days").innerText = Math.floor(distance / daysPerMilli),
            document.getElementById("hours").innerText = Math.floor((distance % daysPerMilli) / hoursPerMilli),
            document.getElementById("minutes").innerText = Math.floor((distance % hoursPerMilli) / minutesPerMilli),
            document.getElementById("seconds").innerText = Math.floor((distance % minutesPerMilli) / secondsPerMilli);      
        }, 0)
    }());