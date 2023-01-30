function attachEventsListeners() {
    //get elements input fields
    let inputDays = document.getElementById('days');
    let inputHours = document.getElementById('hours');
    let inputMinutes = document.getElementById('minutes');
    let inputSeconds = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', convert);
    document.getElementById('hoursBtn').addEventListener('click', convert);
    document.getElementById('minutesBtn').addEventListener('click', convert);
    document.getElementById('secondsBtn').addEventListener('click', convert);

    function convert(event) {
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        //get parent of target and check what is the textContent
        const parent = event.target.parentElement;

        if (parent.textContent.includes('Days')) {
            days = Number(inputDays.value);
            hours = days * 60;
            minutes = hours * 60;
            seconds = minutes * 60;

        } else if (parent.textContent.includes('Hours')) {
            hours = Number(inputHours.value);
            days = hours / 24;
            minutes = hours * 60;
            seconds = minutes * 60;

        } else if (parent.textContent.includes('Minutes')) {
            minutes = Number(inputMinutes.value);
            hours = minutes / 60;
            days = hours / 24;
            seconds = minutes * 60;

        } else if (parent.textContent.includes('Seconds')) {
            seconds = Number(inputSeconds.value);
            minutes = seconds / 60;
            hours = minutes / 60;
            days = hours / 24;
        }

        inputDays.value = days;
        inputHours.value = hours;
        inputMinutes.value = minutes;
        inputSeconds.value = seconds;

    }

}



