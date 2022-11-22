function time() {
    let curr = new Date();
    document.getElementById('date-time').innerHTML = "Current Date & Time: " + curr.toDateString() + " " + curr.toLocaleTimeString();
}
let dt = setInterval(time, 1000);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        document.getElementById('location').innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    if (position.coords.latitude >= 22 && position.coords.latitude <= 24 && position.coords.longitude >=  78 && position.coords.longitude <=  80) {
        document.getElementById('location').innerHTML = "GGITS";
        let yes = document.getElementById('location');
        yes.style.color = 'blue';
        let notsub = document.getElementById('buttonbox');
        notsub.style.display = 'flex';
        document.getElementById('locationbox').style.borderBottom = "solid 1px blueviolet";
    }
    else {
        document.getElementById('location').innerHTML = "You are not in College!";
        let no = document.getElementById('location');
        no.style.color = 'red';
        no.style.fontWeight = 'bold';
        document.getElementById('note1').innerHTML = "You cannot submit this form.";
        document.getElementById('note1').style.display = "flex";
    }
    // document.getElementById('location').innerHTML = "Latitude: " + position.coords.latitude +" Longitude: " + position.coords.longitude;
    console.log("Latitude: " + position.coords.latitude +" Longitude: " + position.coords.longitude);
}
getLocation();

navigator.geolocation.watchPosition(function (position) {
        let warn = document.getElementById('note2');
        // console.log("location allowed");
        warn.innerHTML = "Tracking your location!";
        warn.style.paddingTop = "0";
        warn.style.marginTop = "0";
        warn.style.color = 'blue';
        warn.style.fontWeight = 'bold';
        document.getElementById('note1').style.display = "flex";

    },
    function (error) {
        if (error.code == error.PERMISSION_DENIED) {
            document.getElementById('note1').style.display = "flex";
            document.getElementById('note1').innerHTML = "You cannot submit this form.";
            let warn = document.getElementById('note2');
            warn.style.paddingTop = "0";
            warn.style.marginTop = "0";
            warn.innerHTML = "Location permissions denied!";
            warn.style.color = 'red';
            warn.style.fontWeight = 'bold';
            // console.log("Location denied");
        }

    }
);

function upperCase() {
    let uc = document.getElementById('enroll');
    uc.value = uc.value.toUpperCase();
}

function hide() {
    let hide = document.getElementById('form-body');
    hide.style.display = 'none';
    document.getElementById('timeout').innerHTML = "The time is over!";
    document.getElementById('timeoutbox').style.display = "flex";
    clearTimeout(dt);
}
// setTimeout(hide,10000);

// var navigator_info = window.navigator;
// var screen_info = window.screen;
// var uid = navigator_info.mimeTypes.length;
// uid += navigator_info.userAgent.replace(/\D+/g, '');
// uid += navigator_info.plugins.length;
// uid += screen_info.height || '';
// uid += screen_info.width || '';
// uid += screen_info.pixelDepth || '';
// console.log("Unique device id: " + uid);
// // document.write(uid);
