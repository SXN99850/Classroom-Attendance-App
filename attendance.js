"use script"

var $ = (id) => document.getElementById(id);
var attendanceCount = 0;

function highlight(td) {
    console.log(td);
    console.log(td.className);
    if (td.className == "highlight" || td.className == "") {
        td.classList.toggle("highlight");
    }
    countAttendance(td);
}

function countAttendance(td) {
    if (td.classList == "highlight")
        attendanceCount = attendanceCount + 1;
    if (td.classList == "")
    attendanceCount = attendanceCount - 1;
    if (attendanceCount > 0)
        $("attendanceStatus").style.color = "red";
    else
        $("attendanceStatus").style.color = "green";

    $("attendanceStatus").innerHTML = "The number of students absent = "
        + attendanceCount;

}

document.addEventListener("DOMContentLoaded", () => {
    const main_image = $("main_image");
    const zoomImageCollection = document.querySelectorAll(".zoom");
    const imageCache = [];
    for (let source of zoomImageCollection) {
        let image = new Image;
        image.src = source.src;
        imageCache[imageCache.length] = image;
    }
    let imageCounter = 0;
    const timeFunc = setInterval(() => {
        imageCounter = (imageCounter + 1) % imageCache.length;
        let image = imageCache[imageCounter];
        main_image.src = image.src;
    }, 1000);

    const students = document.querySelectorAll(".student");
    students.forEach(student => {
        student.addEventListener("click", evt => {
            highlight(evt.target);
        })
    })
});

