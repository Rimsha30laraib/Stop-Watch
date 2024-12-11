document.addEventListener('DOMContentLoaded', function() {
    let millisec = 0, sec = 0, min = 0, hours = 0;
    let timeRef = document.querySelector(".timer-display");
    let int = null;

    document.getElementById("start-timer").addEventListener("click", () => {
        if (int !== null) {
            clearInterval(int);
        }
        int = setInterval(displayTimer, 10);
    });

    document.getElementById("pause-timer").addEventListener("click", () => {
        clearInterval(int);
    });

    document.getElementById("reset-timer").addEventListener("click", () => {
        clearInterval(int);
        [millisec, sec, min, hours] = [0, 0, 0, 0];
        timeRef.innerHTML = "00 : 00 : 00 : 000";
    });

    function displayTimer() {
        millisec += 10;
        if (millisec === 1000) {
            millisec = 0;
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
                if (min === 60) {
                    min = 0;
                    hours++;
                }
            }
        }

        let h = hours < 10 ? "0" + hours : hours;
        let m = min < 10 ? "0" + min : min;
        let s = sec < 10 ? "0" + sec : sec;
        let ms = millisec < 10 ? "00" + millisec : millisec < 100 ? "0" + millisec : millisec;

        timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
    }
});
