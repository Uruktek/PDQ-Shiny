function time() {
    let date = new Date();
    let hour = date.getHours();
    //making it 12 hour clock because america....
    if(hour > 12){
        hour = hour - 12;
    }
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById("clock").innerText = hour + ":" + min + ":" + sec;

    let t = setTimeout(function() {time()}, 1000);
}

function MyGetDate(){
    let date = new Date();//creating instance of date
    //Date info
    let month = date.getMonth(); 
    let day = date.getDate();
    //Array of 3 char month abbrevations
    let monthAbr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    //Logic for pulling from the array
    let result = "";

    //TODO please find a better way to do this nonsense
    switch (month) {
        case 0:
            result = monthAbr[0];
            break;
        case 1:
            result = monthAbr[1];
            break;
        case 2:
            result = monthAbr[2];
            break;
        case 3:
            result = monthAbr[3];
            break;
        case 4:
            result = monthAbr[4];
            break;
        case 5:
            result = monthAbr[5];
            break;
        case 6:
            result = monthAbr[6];
            break;
        case 7:
            result = monthAbr[7];
            break;
        case 8:
            result = monthAbr[8];
            break;
        case 9:
            result = monthAbr[9];
            break;
        case 10:
            result = monthAbr[10];
            break;
        case 11:
            result = monthAbr[11];
            break;
    
        default:
            break;
    }

    //added +1 to month because result starts at 0 for jan
    document.getElementById("date").innerHTML = (month + 1) + "/" + day;

    //setting the month in abbrevated form from the switch statement
    document.getElementById("dateText").innerHTML = result + " " + day + " " + date.getFullYear();
}


function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}



MyGetDate();
time();