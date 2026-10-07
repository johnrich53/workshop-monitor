// ======================================================
// WORKSHOP LIVE MONITOR
// STABLE SMART PAGING VERSION
// ======================================================


// ======================================================
// ACTIVE LORRIES
// ======================================================

const lorries = [

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


    // TEST:
    // ENGINE = 4 PEOPLE
    // TYRE MUST GO TO PAGE 2
    {
        lorry: "JMN6262",

        tasks: [

            {
                name: "ENGINE",

                technicians: [

                    {
                        name: "JOHN",
                        status: "COMPLETED"
                    },

                    {
                        name: "HAFIZ",
                        status: "WORKING"
                    },

                    {
                        name: "ALI",
                        status: "ASSIGNED"
                    },

                    {
                        name: "KUMAR",
                        status: "ASSIGNED"
                    }

                ]
            },

            {
                name: "TYRE",

                technicians: [
                    {
                        name: "ABU",
                        status: "WORKING"
                    }
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
                    {
                        name: "ABU",
                        status: "WORKING"
                    }
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
                    {
                        name: "KUMAR",
                        status: "WAITING"
                    }
                ]
            },

            {
                name: "SERVICE",

                technicians: [
                    {
                        name: "HAFIZ",
                        status: "ASSIGNED"
                    }
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
                    {
                        name: "ALI",
                        status: "ASSIGNED"
                    }
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
                    {
                        name: "JOHN",
                        status: "WORKING"
                    }
                ]
            },

            {
                name: "ELECTRICAL",

                technicians: [
                    {
                        name: "JOHN",
                        status: "WORKING"
                    }
                ]
            }

        ]
    },


    // MAIN PAGE 2

    {
        lorry: "JQX5538",

        tasks: [

            {
                name: "AIR COND",

                technicians: [
                    {
                        name: "HAFIZ",
                        status: "WORKING"
                    }
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
                    {
                        name: "ALI",
                        status: "UNABLE"
                    }
                ]
            },

            {
                name: "BRAKE",

                technicians: [
                    {
                        name: "ABU",
                        status: "ASSIGNED"
                    }
                ]
            }

        ]
    }

];


// ======================================================
// TECHNICIANS
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

// MAIN SCREEN
const lorriesPerPage = 6;

const mainPageDuration = 60;


// TASK AUTO PAGE
const taskPageDuration = 15000;


// IMPORTANT:
//
// Maximum 2 TASKS per task page
//
// AND
//
// Maximum 4 TECHNICIAN ROWS per task page.
//
// BOTH rules apply.
//
// A task will NEVER be split.
//
const maxTasksPerTaskPage = 2;

const maxTechniciansPerTaskPage = 4;


// TECHNICIAN LIVE
const techniciansPerPage = 6;

const technicianPageDuration = 30000;


// READY FOR USE
const readyLorriesPerPage = 3;

const readyPageDuration = 15000;


// ======================================================
// STATE
// ======================================================

let currentPage = 0;

let technicianPage = 0;

let readyPage = 0;

let mainCountdown = mainPageDuration;


// Individual lorry task page
const lorryTaskPages = {};


// ======================================================
// CLOCK
// ======================================================

function updateClock() {

    const now = new Date();


    const time =
        now.toLocaleTimeString(
            "en-MY",
            {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            }
        );


    const date =
        now.toLocaleDateString(
            "en-MY",
            {
                weekday: "long",
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );


    document.getElementById(
        "time"
    ).innerText =
        time.toUpperCase();


    document.getElementById(
        "date"
    ).innerText =
        date.toUpperCase();

}


updateClock();

setInterval(
    updateClock,
    1000
);


// ======================================================
// STATUS CLASS
// ======================================================

function statusClass(status) {

    return String(status)
        .toLowerCase()
        .replaceAll(" ", "-");

}


// ======================================================
// SMART TASK PAGING
// ======================================================
//
// RULE:
//
// Maximum 2 tasks/page
// Maximum 4 technician rows/page
//
// Task cannot be split.
//
// EXAMPLE:
//
// ENGINE = 4 technicians
// TYRE   = 1 technician
//
// PAGE 1
// ENGINE + all 4 people
//
// PAGE 2
// TYRE + ABU
//
// --------------------------------------
//
// ENGINE = 2 technicians
// PAINT  = 1 technician
//
// PAGE 1
// ENGINE + PAINT
//
// --------------------------------------
//
// This avoids "eating" rows.
// ======================================================

function buildTaskPages(tasks) {

    if (
        !Array.isArray(tasks) ||
        tasks.length === 0
    ) {

        return [[]];

    }


    const pages = [];

    let currentPageTasks = [];

    let currentTechnicianCount = 0;


    tasks.forEach(task => {

        const techCount =
            Array.isArray(task.technicians)
                ? task.technicians.length
                : 0;


        const taskLimitReached =
            currentPageTasks.length >=
            maxTasksPerTaskPage;


        const technicianLimitReached =
            currentPageTasks.length > 0 &&
            (
                currentTechnicianCount +
                techCount
            ) >
            maxTechniciansPerTaskPage;


        // If adding this WHOLE task
        // breaks either rule,
        // finish current page first.

        if (
            taskLimitReached ||
            technicianLimitReached
        ) {

            pages.push(
                currentPageTasks
            );


            currentPageTasks = [];

            currentTechnicianCount = 0;

        }


        // Add WHOLE task.
        // Never split.

        currentPageTasks.push(task);

        currentTechnicianCount +=
            techCount;

    });


    // Last page

    if (
        currentPageTasks.length > 0
    ) {

        pages.push(
            currentPageTasks
        );

    }


    return pages;

}


// ======================================================
// BUILD TASK HTML
// ======================================================

function buildTaskHTML(task) {

    let technicianHTML = "";


    const taskTechnicians =
        Array.isArray(task.technicians)
            ? task.technicians
            : [];


    taskTechnicians.forEach(tech => {

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


    return `

        <div class="task">

            <div class="task-name">
                ${task.name}
            </div>

            ${technicianHTML}

        </div>

    `;

}


// ======================================================
// RENDER LORRIES
// ======================================================

function renderLorries(
    flashLorryNames = []
) {

    const grid =
        document.getElementById(
            "lorryGrid"
        );


    grid.innerHTML = "";


    const totalPages =
        Math.max(
            1,
            Math.ceil(
                lorries.length /
                lorriesPerPage
            )
        );


    if (
        currentPage >= totalPages
    ) {

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
            buildTaskPages(
                lorry.tasks
            );


        // Create task page state

        if (
            lorryTaskPages[
                lorry.lorry
            ] === undefined
        ) {

            lorryTaskPages[
                lorry.lorry
            ] = 0;

        }


        // Safety reset

        if (
            lorryTaskPages[
                lorry.lorry
            ] >=
            taskPages.length
        ) {

            lorryTaskPages[
                lorry.lorry
            ] = 0;

        }


        const taskPageIndex =
            lorryTaskPages[
                lorry.lorry
            ];


        const visibleTasks =
            taskPages[
                taskPageIndex
            ] || [];


        const card =
            document.createElement(
                "div"
            );


        card.className =
            "lorry-card";


        // Flash only lorries whose
        // task page really changed.

        if (
            flashLorryNames.includes(
                lorry.lorry
            )
        ) {

            card.classList.add(
                "page-flash"
            );

        }


        let tasksHTML = "";


        visibleTasks.forEach(task => {

            tasksHTML +=
                buildTaskHTML(task);

        });


        let taskPageText =
            "ALL TASKS";


        let taskPageClass =
            "task-page-info";


        if (
            taskPages.length > 1
        ) {

            taskPageText =

                `TASK PAGE ${
                    taskPageIndex + 1
                } / ${
                    taskPages.length
                } · AUTO 15 SEC`;


            taskPageClass +=
                " multi";

        }


        card.innerHTML = `

            <div class="lorry-header">

                <div class="lorry-no">
                    ${lorry.lorry}
                </div>


                <div class="job-count">

                    ${lorry.tasks.length}

                    TASK${
                        lorry.tasks.length === 1
                            ? ""
                            : "S"
                    }

                </div>

            </div>


            <div class="task-scroll">

                ${tasksHTML}

            </div>


            <div
                class="${taskPageClass}"
            >

                ${taskPageText}

            </div>

        `;


        grid.appendChild(card);

    });


    // Fill empty lorry slots

    for (
        let i = pageLorries.length;
        i < lorriesPerPage;
        i++
    ) {

        const empty =
            document.createElement(
                "div"
            );


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
// TASK AUTO ROTATION
// ======================================================

function rotateTaskPages() {

    const changedLorries = [];


    lorries.forEach(lorry => {

        const taskPages =
            buildTaskPages(
                lorry.tasks
            );


        // Only rotate if
        // this lorry really has
        // more than one task page.

        if (
            taskPages.length <= 1
        ) {

            return;

        }


        if (
            lorryTaskPages[
                lorry.lorry
            ] === undefined
        ) {

            lorryTaskPages[
                lorry.lorry
            ] = 0;

        }


        lorryTaskPages[
            lorry.lorry
        ] =

            (
                lorryTaskPages[
                    lorry.lorry
                ] + 1
            )

            %

            taskPages.length;


        changedLorries.push(
            lorry.lorry
        );

    });


    // Render new page AND
    // immediately trigger red flash.

    renderLorries(
        changedLorries
    );

}


setInterval(
    rotateTaskPages,
    taskPageDuration
);


// ======================================================
// MAIN LORRY PAGE ROTATION
// ======================================================

function updateMainPageTimer() {

    const totalPages =
        Math.max(
            1,
            Math.ceil(
                lorries.length /
                lorriesPerPage
            )
        );


    if (
        totalPages <= 1
    ) {

        document.getElementById(
            "nextPage"
        ).innerText =
            "LIVE MONITOR";


        return;

    }


    mainCountdown--;


    if (
        mainCountdown <= 0
    ) {

        currentPage =
            (
                currentPage + 1
            )

            %

            totalPages;


        mainCountdown =
            mainPageDuration;


        // Main page change is NOT
        // a task page flash.

        renderLorries();

    }


    const minutes =
        Math.floor(
            mainCountdown / 60
        );


    const seconds =
        mainCountdown % 60;


    document.getElementById(
        "nextPage"
    ).innerText =

        `NEXT PAGE · ${
            String(minutes)
                .padStart(2, "0")
        }:${
            String(seconds)
                .padStart(2, "0")
        }`;

}


setInterval(
    updateMainPageTimer,
    1000
);


// ======================================================
// TECHNICIAN LIVE
// ======================================================

function renderTechnicians() {

    const list =
        document.getElementById(
            "technicianList"
        );


    list.innerHTML = "";


    const working =
        technicians.filter(
            tech =>
                tech.status ===
                "WORKING"
        ).length;


    const available =
        technicians.filter(
            tech =>
                tech.status ===
                "AVAILABLE"
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


    const totalTechPages =
        Math.max(
            1,
            Math.ceil(
                technicians.length /
                techniciansPerPage
            )
        );


    if (
        technicianPage >=
        totalTechPages
    ) {

        technicianPage = 0;

    }


    const start =
        technicianPage *
        techniciansPerPage;


    const pageTechnicians =
        technicians.slice(
            start,
            start +
            techniciansPerPage
        );


    pageTechnicians.forEach(tech => {

        let colour = "#888";

        let dotColour = "#888";


        if (
            tech.status === "WORKING"
        ) {

            colour = "#4da3ff";
            dotColour = "#2196f3";

        }


        if (
            tech.status === "AVAILABLE"
        ) {

            colour = "#42e879";
            dotColour = "#22c55e";

        }


        if (
            tech.status === "WAITING"
        ) {

            colour = "#ff922b";
            dotColour = "#ff7b00";

        }


        if (
            tech.status === "NOT IN"
        ) {

            colour = "#aaa";
            dotColour = "#777";

        }


        const row =
            document.createElement(
                "div"
            );


        row.className =
            "technician-row";


        row.innerHTML = `

            <div class="tech-top">

                <span>
                    ${tech.name}
                </span>


                <span
                    style="
                        color:${colour};
                        display:flex;
                        align-items:center;
                        gap:6px;
                    "
                >

                    <span
                        style="
                            width:10px;
                            height:10px;
                            border-radius:50%;
                            background:${dotColour};
                            display:inline-block;
                        "
                    ></span>

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
// ======================================================

function rotateTechnicians() {

    const totalTechPages =
        Math.max(
            1,
            Math.ceil(
                technicians.length /
                techniciansPerPage
            )
        );


    if (
        totalTechPages <= 1
    ) {

        return;

    }


    technicianPage =
        (
            technicianPage + 1
        )

        %

        totalTechPages;


    renderTechnicians();

}


setInterval(
    rotateTechnicians,
    technicianPageDuration
);


// ======================================================
// READY FOR USE
// ======================================================

function renderReadyLorries() {

    const list =
        document.getElementById(
            "readyList"
        );


    list.innerHTML = "";


    const totalReadyPages =
        Math.max(
            1,
            Math.ceil(
                readyLorries.length /
                readyLorriesPerPage
            )
        );


    if (
        readyPage >=
        totalReadyPages
    ) {

        readyPage = 0;

    }


    const start =
        readyPage *
        readyLorriesPerPage;


    const pageReadyLorries =
        readyLorries.slice(
            start,
            start +
            readyLorriesPerPage
        );


    pageReadyLorries.forEach(item => {

        const row =
            document.createElement(
                "div"
            );


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

    if (
        totalReadyPages > 1
    ) {

        const indicator =
            document.createElement(
                "div"
            );


        indicator.style.cssText = `

            text-align:center;
            color:#ffd400;
            font-size:11px;
            font-weight:900;
            padding:4px;

        `;


        indicator.innerText =

            `READY PAGE ${
                readyPage + 1
            } / ${
                totalReadyPages
            } · AUTO 15 SEC`;


        list.appendChild(
            indicator
        );

    }

}


// ======================================================
// READY AUTO ROTATION
// ======================================================

function rotateReadyLorries() {

    const totalReadyPages =
        Math.max(
            1,
            Math.ceil(
                readyLorries.length /
                readyLorriesPerPage
            )
        );


    if (
        totalReadyPages <= 1
    ) {

        return;

    }


    readyPage =
        (
            readyPage + 1
        )

        %

        totalReadyPages;


    renderReadyLorries();

}


setInterval(
    rotateReadyLorries,
    readyPageDuration
);


// ======================================================
// START
// ======================================================

renderLorries();

renderTechnicians();

renderReadyLorries();

updateMainPageTimer();