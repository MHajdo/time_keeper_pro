
function generate_rand_time(min, max) {
    let min_h = min.split(':')[0];
    let min_m = min.split(':')[1];
    let min_unix = (new Date()).setHours(min_h, min_m);

    let max_h = max.split(':')[0];
    let max_m = max.split(':')[1];
    let max_unix = (new Date()).setHours(max_h, max_m);

    let rand_unix = min_unix + Math.random() * (max_unix - min_unix);

    let rand_date = new Date(rand_unix);
    let rand_hours = rand_date.getHours();
    let rand_minutes = rand_date.getMinutes();
    if (rand_minutes < 10) {
        rand_minutes = '0' + rand_minutes;
    }

    return `${rand_hours}:${rand_minutes}`;
}


function generate_attendance(form_data) {
    let attendance = [];

    let currentDate = new Date();
    for (let i = 1; i <= 31; i++) {
        currentDate.setDate(i);

        if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
            continue;
        }

        attendance.push({
            day: currentDate.toDateString(),
            arrived: generate_rand_time(form_data.start_from, form_data.start_to),
            departed: generate_rand_time(form_data.end_from, form_data.end_to)
        })
    }

    return attendance
}


export function generate_data(form_data) {
    let out = [];

    for(let coworker_name of form_data.coworkers) {
        let coworker_data = {
            name: coworker_name,
            attendance: generate_attendance(form_data)
        }
        out.push(coworker_data)
    }

    return out;
}