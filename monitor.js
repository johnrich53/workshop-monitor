// ======================================================
// WORKSHOP LIVE MONITOR - TEST VERSION
// ======================================================


// ======================================================
// ACTIVE LORRY DATA
// ======================================================

const lorries = [

    // TEST: ZH965 HAS 6 TASKS
    {
        lorry: "ZH965",

        tasks: [

            {
                name: "ENGINE",
                technicians: [
                    { name: "ALI", status: "WORKING" },
                    { name: "JOHN", status: "ASSIGNED" }
                ]
            },

            {
                name: "PAINT",
                technicians: [
                    { name: "KUMAR", status: "WAITING" }
                ]
            },

            {
                name: "TYRE",
                technicians: [
                    { name: "ABU", status: "WORKING" }
                ]
            },

            {
                name: "ELECTRICAL",
                technicians: [
                    { name: "HAFIZ", status: "ASSIGNED" }
                ]
            },

            {
                name: "AIR COND",
                technicians: [
                    { name: "JOHN", status: "WORKING" }
                ]
            },

            {
                name: "BRAKE",
                technicians: [
                    { name: "ABU", status: "ASSIGNED" }
                ]
            }

        ]
    },


    {
        lorry: "JMN6262",

        tasks: [

            {
                name: "ENGINE",
                technicians: [
                    { name: "JOHN", status: "COMPLETED" },
                    { name: "HAFIZ", status: "WORKING" },
                    { name: "ALI", status: "ASSIGNED" }
                ]
            },

            {
                name: "TYRE",
                technicians: [
                    { name: "ABU", status: "WORKING" }
                ]
            }

        ]
    },


    {
        lorry: "ZH961",

        tasks: [

            {
                name: "BRAKE",
                technicians: [
                    { name: "ABU", status: "WORKING" }
                ]
            }

        ]
    },


    {
        lorry: "ZH970",

        tasks: [

            {
                name: "TYRE",
                technicians: [
                    { name: "KUMAR", status: "WAITING" }
                ]
            },

            {
                name: "SERVICE",
                technicians: [
                    { name: "HAFIZ", status: "ASSIGNED" }
                ]
            }

        ]
    },


    {
        lorry: "ZH972",

        tasks: [

            {
                name: "PAINT",
                technicians: [
                    { name: "ALI", status: "ASSIGNED" }
                ]
            }

        ]
    },


    {
        lorry: "ZH980",

        tasks: [

            {
                name: "ENGINE",
                technicians: [
                    { name: "JOHN", status: "WORKING" }
                ]
            },

            {
                name: "ELECTRICAL",
                technicians: [
                    { name: "JOHN", status: "WORKING" }
                ]
            }

        ]
    },


    // ==================================================
    // MAIN PAGE 2
    // ==================================================

    {
        lorry: "JQX5538",

        tasks: [

            {
                name: "AIR COND",
                technicians: [
                    { name: "HAFIZ", status: "WORKING" }
                ]
            }

        ]
    },


    {
        lorry: "ZH988",

        tasks: [

            {
                name: "GEARBOX",
                technicians: [
                    { name: "ALI", status: "UNABLE" }
                ]
            },

            {
                name: "BRAKE",
                technicians: [
                    { name: "ABU", status: "ASSIGNED" }
                ]
            }

        ]
    }

];


// ======================================================
// TECHNICIAN LIVE DATA
// ======================================================

const technicians = [

    {
        name: "ALI",
        status: "WORKING",
        job: "ZH965 · ENGINE"
    },

    {
        name: "JOHN",
        status: "WORKING",
        job: "ZH980 · ENGINE"
    },

    {
        name: "ABU",
        status: "WORKING",
        job: "ZH961 · BRAKE"
    },

    {
        name: "KUMAR",
        status: "WAITING",
        job: "ZH970 · TYRE"
    },

    {
        name: "HAFIZ",
        status: "WORKING",
        job: "JQX5538 · AIR COND"
    },

    {
        name: "RAVI",
        status: "AVAILABLE",
        job: "NO ACTIVE JOB"
    },

    {
        name: "ADAM",
        status: "AVAILABLE",
        job: "NO ACTIVE JOB"
    },

    {
        name: "SAM",
        status: "NOT IN",
        job: "NOT CHECKED IN"
    },

    {
        name: "AH CHONG",
        status: "AVAILABLE",
        job: "NO ACTIVE JOB"
    },

    {
        name: "RAHIM",
        status: "WORKING",
        job: "ZH988 · BRAKE"
    }

];


// ======================================================
// READY FOR USE
// 6 LORRIES FOR AUTO-PAGE TEST
// ======================================================

const readyLorries = [

    {
        lorry: "ZH955",
        time: "Completed 01:42 PM"
    },

    {
        lorry: "JMN5538",
        time: "Completed 02:05 PM"
    },

    {
        lorry: "ZH968",
        time: "Completed 02:18 PM"
    },

    {
        lorry: "ZH977",
        time: "Completed 02:31 PM"
    },

    {
        lorry: "JQT6262",
        time: "Completed 02:45 PM"
    },

    {
        lorry: "ZH990",
        time: "Completed 03:01 PM"
    }

];


// ======================================================
// SETTINGS
// ======================================================

// MAIN LORRY SCREEN
const lorriesPerPage = 6;

// Main lorry screen changes every 60 seconds
const pageDuration = 60;


// TASKS INSIDE EACH LORRY

// Maximum 2 tasks shown at one time
const tasksPerLorryPage = 2;

// Task page changes every 15 seconds
const taskPageDuration = 15000;


// TECHNICIAN LIVE

// Maximum 6 technicians shown
const techniciansPerPage = 6;

// Technician page changes every 30 seconds
const technicianPageDuration = 30000;


// READY FOR USE

// Maximum 3 ready lorries shown
const readyLorriesPerPage = 3;

// Ready page changes every 15 seconds
const readyPageDuration = 15000;


// ======================================================
// SYSTEM STATE
// ======================================================

let currentPage = 0;

let technicianPage = 0;

let readyPage = 0;

let countdown = pageDuration;


// Each lorry remembers its own task page
const lorryTaskPages = {};


// ======================================================
// CLOCK
// ======================================================

function updateClock() {

    const now = new Date();

    const time = now.toLocaleTimeString(
        "en-MY",
        {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        }
    );

    const date = now.toLocaleDateString(
        "en-MY",
        {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric"
        }
    );

    document.getElementById("time").innerText =
        time.toUpperCase();

    document.getElementById("date").innerText =
        date.toUpperCase();
}


setInterval(updateClock, 1000);

updateClock();


// ======================================================
// STATUS CLASS
// ======================================================

function statusClass(status) {

    return status
        .toLowerCase()
        .replaceAll(" ", "-");

}


// ======================================================
// BUILD TASK PAGES
//
// 1-2 TASKS = 1 PAGE
// 3-4 TASKS = 2 PAGES
// 5-6 TASKS = 3 PAGES
// 7-8 TASKS = 4 PAGES
// ETC.
// ======================================================

function buildTaskPages(tasks) {

    const pages = [];

    for (
        let i = 0;
        i < tasks.length;
        i += tasksPerLorryPage
    ) {

        pages.push(
            tasks.slice(
                i,
                i + tasksPerLorryPage
            )
        );

    }

    if (pages.length === 0) {
        pages.push([]);
    }

    return pages;
}


// ======================================================
// RENDER ACTIVE LORRIES
// ======================================================

function renderLorries() {

    const grid =
        document.getElementById("lorryGrid");

    grid.innerHTML = "";


    const totalPages = Math.max(
        1,
        Math.ceil(
            lorries.length /
            lorriesPerPage
        )
    );


    if (currentPage >= totalPages) {
        currentPage = 0;
    }


    const start =
        currentPage *
        lorriesPerPage;


    const pageLorries =
        lorries.slice(
            start,
            start + lorriesPerPage
        );


    pageLorries.forEach(lorry => {

        const taskPages =
            buildTaskPages(lorry.tasks);


        if (
            lorryTaskPages[lorry.lorry] === undefined
        ) {
            lorryTaskPages[lorry.lorry] = 0;
        }


        if (
            lorryTaskPages[lorry.lorry] >=
            taskPages.length
        ) {
            lorryTaskPages[lorry.lorry] = 0;
        }


        const taskPageIndex =
            lorryTaskPages[lorry.lorry];


        const visibleTasks =
            taskPages[taskPageIndex];


        const card =
            document.createElement("div");

        card.className =
            "lorry-card";


        let tasksHTML = "";


        visibleTasks.forEach(task => {

            let technicianHTML = "";


            task.technicians.forEach(tech => {

                technicianHTML += `

                    <div
                        class="
                            tech
                            ${statusClass(tech.status)}
                        "
                    >

                        <span class="tech-name">
                            ${tech.name}
                        </span>

                        <span class="tech-status">
                            ${tech.status}
                        </span>

                    </div>

                `;

            });


            tasksHTML += `

                <div class="task">

                    <div class="task-name">
                        ${task.name}
                    </div>

                    ${technicianHTML}

                </div>

            `;

        });


        // TASK PAGE INDICATOR

        let taskPageText =
            "ALL TASKS";

        let taskPageClass =
            "task-page-info";


        if (taskPages.length > 1) {

            taskPageText =

                `TASK PAGE ${
                    taskPageIndex + 1
                } / ${
                    taskPages.length
                } · AUTO 15 SEC`;


            taskPageClass += " multi";

        }


        card.innerHTML = `

            <div class="lorry-header">

                <div class="lorry-no">
                    ${lorry.lorry}
                </div>

                <div class="job-count">

                    ${lorry.tasks.length}

                    TASK${
                        lorry.tasks.length > 1
                        ? "S"
                        : ""
                    }

                </div>

            </div>


            <div class="task-scroll">

                ${tasksHTML}

            </div>


            <div class="${taskPageClass}">

                ${taskPageText}

            </div>

        `;


        grid.appendChild(card);

    });


    // FILL EMPTY BOXES

    for (
        let i = pageLorries.length;
        i < lorriesPerPage;
        i++
    ) {

        const empty =
            document.createElement("div");

        empty.className =
            "empty-card";

        empty.innerText =
            "NO ACTIVE LORRY";

        grid.appendChild(empty);

    }


    document.getElementById(
        "pageInfo"
    ).innerText =

        `PAGE ${
            currentPage + 1
        } / ${
            totalPages
        }`;

}


// ======================================================
// INDIVIDUAL LORRY TASK AUTO ROTATION
// EVERY 15 SECONDS
// ======================================================

setInterval(() => {

    lorries.forEach(lorry => {

        const taskPages =
            buildTaskPages(lorry.tasks);


        if (taskPages.length > 1) {

            if (
                lorryTaskPages[lorry.lorry] === undefined
            ) {
                lorryTaskPages[lorry.lorry] = 0;
            }


            lorryTaskPages[lorry.lorry] =

                (
                    lorryTaskPages[lorry.lorry] + 1
                )

                %

                taskPages.length;

        }

    });


    renderLorries();

}, taskPageDuration);


// ======================================================
// MAIN LORRY PAGE TIMER
// EVERY 60 SECONDS
// ======================================================

function updatePageTimer() {

    const totalPages = Math.max(
        1,
        Math.ceil(
            lorries.length /
            lorriesPerPage
        )
    );


    if (totalPages <= 1) {

        document.getElementById(
            "nextPage"
        ).innerText =
            "LIVE MONITOR";

        return;

    }


    countdown--;


    if (countdown <= 0) {

        currentPage =
            (
                currentPage + 1
            )
            %
            totalPages;


        countdown =
            pageDuration;


        renderLorries();

    }


    const minutes =
        Math.floor(
            countdown / 60
        );


    const seconds =
        countdown % 60;


    document.getElementById(
        "nextPage"
    ).innerText =

        `NEXT PAGE · ${
            String(minutes).padStart(2, "0")
        }:${
            String(seconds).padStart(2, "0")
        }`;

}


setInterval(
    updatePageTimer,
    1000
);


// ======================================================
// RENDER TECHNICIANS
// ======================================================

function renderTechnicians() {

    const list =
        document.getElementById(
            "technicianList"
        );


    list.innerHTML = "";


    // SUMMARY

    const working =
        technicians.filter(
            tech =>
                tech.status === "WORKING"
        ).length;


    const available =
        technicians.filter(
            tech =>
                tech.status === "AVAILABLE"
        ).length;


    document.getElementById(
        "totalTech"
    ).innerText =
        technicians.length;


    document.getElementById(
        "workingTech"
    ).innerText =
        working;


    document.getElementById(
        "availableTech"
    ).innerText =
        available;


    // PAGES

    const totalTechPages = Math.max(
        1,
        Math.ceil(
            technicians.length /
            techniciansPerPage
        )
    );


    if (
        technicianPage >= totalTechPages
    ) {
        technicianPage = 0;
    }


    const start =
        technicianPage *
        techniciansPerPage;


    const pageTechnicians =
        technicians.slice(
            start,
            start + techniciansPerPage
        );


    pageTechnicians.forEach(tech => {

        let colour = "#888";
        let icon = "⚫";


        if (tech.status === "WORKING") {
            colour = "#3b82f6";
            icon = "🔵";
        }


        if (tech.status === "AVAILABLE") {
            colour = "#22c55e";
            icon = "🟢";
        }


        if (tech.status === "WAITING") {
            colour = "#f97316";
            icon = "🟠";
        }


        if (tech.status === "NOT IN") {
            colour = "#9ca3af";
            icon = "⚫";
        }


        const row =
            document.createElement("div");


        row.className =
            "technician-row";


        row.innerHTML = `

            <div class="tech-top">

                <span>
                    ${tech.name}
                </span>

                <span style="color:${colour}">

                    ${icon}
                    ${tech.status}

                </span>

            </div>


            <div class="tech-job">
                ${tech.job}
            </div>

        `;


        list.appendChild(row);

    });

}


// ======================================================
// TECHNICIAN AUTO ROTATION
// EVERY 30 SECONDS
// ======================================================

setInterval(() => {

    const totalTechPages = Math.max(
        1,
        Math.ceil(
            technicians.length /
            techniciansPerPage
        )
    );


    if (totalTechPages > 1) {

        technicianPage =
            (
                technicianPage + 1
            )
            %
            totalTechPages;


        renderTechnicians();

    }

}, technicianPageDuration);


// ======================================================
// READY FOR USE
// ======================================================

function renderReadyLorries() {

    const list =
        document.getElementById(
            "readyList"
        );


    list.innerHTML = "";


    const totalReadyPages = Math.max(
        1,
        Math.ceil(
            readyLorries.length /
            readyLorriesPerPage
        )
    );


    if (
        readyPage >= totalReadyPages
    ) {
        readyPage = 0;
    }


    const start =
        readyPage *
        readyLorriesPerPage;


    const pageReadyLorries =
        readyLorries.slice(
            start,
            start + readyLorriesPerPage
        );


    pageReadyLorries.forEach(item => {

        const row =
            document.createElement("div");


        row.className =
            "ready-item";


        row.innerHTML = `

            <div class="ready-lorry">

                ✓ ${item.lorry}

            </div>


            <div class="ready-time">

                ${item.time}

            </div>

        `;


        list.appendChild(row);

    });


    // PAGE INDICATOR

    if (totalReadyPages > 1) {

        const pageIndicator =
            document.createElement("div");


        pageIndicator.style.cssText = `

            text-align:center;
            color:#ffd400;
            font-size:11px;
            font-weight:900;
            padding:4px;

        `;


        pageIndicator.innerText =

            `READY PAGE ${
                readyPage + 1
            } / ${
                totalReadyPages
            } · AUTO 15 SEC`;


        list.appendChild(
            pageIndicator
        );

    }

}


// ======================================================
// READY FOR USE AUTO ROTATION
// EVERY 15 SECONDS
// ======================================================

setInterval(() => {

    const totalReadyPages = Math.max(
        1,
        Math.ceil(
            readyLorries.length /
            readyLorriesPerPage
        )
    );


    if (totalReadyPages > 1) {

        readyPage =
            (
                readyPage + 1
            )
            %
            totalReadyPages;


        renderReadyLorries();

    }

}, readyPageDuration);


// ======================================================
// START
// ======================================================

renderLorries();

renderTechnicians();

renderReadyLorries();