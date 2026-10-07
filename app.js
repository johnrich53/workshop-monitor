const defaultSkills = [
    "Engine",
    "Tyre",
    "Brake",
    "Electrical",
    "Air Cond",
    "Suspension",
    "Gearbox",
    "Clutch",
    "Service",
    "Welding",
    "Body",
    "General",
    "Other"
];


let technicians =
    JSON.parse(localStorage.getItem("techniciansV2")) || [
        {
            id: "TECH001",
            name: "Ali",
            skills: [
                "Engine",
                "Electrical",
                "Brake"
            ],
            status: "Active"
        },
        {
            id: "TECH002",
            name: "Abu",
            skills: [
                "Tyre",
                "Brake",
                "Suspension"
            ],
            status: "Active"
        }
    ];


function saveData() {
    localStorage.setItem(
        "techniciansV2",
        JSON.stringify(technicians)
    );
}


function renderTechnicians() {

    const table =
        document.getElementById("technicianTable");

    if (!table) return;

    table.innerHTML = "";


    technicians.forEach((tech, index) => {

        let skillHTML = "";

        tech.skills.forEach((skill, skillIndex) => {

            if (skillIndex === 0) {

                skillHTML += `
                    <span class="skill primary">
                        ⭐ 1. ${skill}
                    </span>
                `;

            } else {

                skillHTML += `
                    <span class="skill">
                        ${skillIndex + 1}. ${skill}
                    </span>
                `;

            }

        });


        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${tech.id}</td>

            <td>
                <strong>${tech.name}</strong>
            </td>

            <td>
                ${skillHTML}
            </td>

            <td class="${
                tech.status === "Active"
                ? "active-status"
                : "inactive-status"
            }">
                ${tech.status}
            </td>

            <td>

                <button
                    class="action edit"
                    onclick="editTechnician(${index})">

                    Edit

                </button>

                <button
                    class="action disable"
                    onclick="toggleTechnician(${index})">

                    ${
                        tech.status === "Active"
                        ? "Disable"
                        : "Enable"
                    }

                </button>

            </td>
        `;

        table.appendChild(row);

    });

}


function createSkillRow(value = "") {

    const container =
        document.getElementById("skillContainer");

    const row =
        document.createElement("div");

    row.className = "skill-row";


    const priority =
        document.createElement("div");

    priority.className = "priority";


    const select =
        document.createElement("select");

    select.className = "skill-select";


    defaultSkills.forEach(skill => {

        const option =
            document.createElement("option");

        option.value = skill;
        option.textContent = skill;

        select.appendChild(option);

    });


    const otherInput =
        document.createElement("input");

    otherInput.className = "other-input";

    otherInput.placeholder =
        "Enter other skill";

    otherInput.style.display = "none";


    if (value && !defaultSkills.includes(value)) {

        select.value = "Other";

        otherInput.value = value;

        otherInput.style.display = "block";

    } else if (value) {

        select.value = value;

    }


    select.onchange = function () {

        if (select.value === "Other") {

            otherInput.style.display = "block";

        } else {

            otherInput.style.display = "none";
            otherInput.value = "";

        }

    };


    const removeButton =
        document.createElement("button");

    removeButton.type = "button";

    removeButton.className = "remove-skill";

    removeButton.innerText = "✕";


    removeButton.onclick = function () {

        row.remove();

        updatePriorityNumbers();

    };


    row.appendChild(priority);

    row.appendChild(select);

    row.appendChild(otherInput);

    row.appendChild(removeButton);

    container.appendChild(row);


    updatePriorityNumbers();

}


function updatePriorityNumbers() {

    const rows =
        document.querySelectorAll(".skill-row");

    rows.forEach((row, index) => {

        const priority =
            row.querySelector(".priority");

        if (index === 0) {

            priority.innerHTML =
                "⭐<br>#1";

        } else {

            priority.innerHTML =
                "#" + (index + 1);

        }

    });

}


function addSkill() {

    createSkillRow();

}


function openAddTechnician() {

    document.getElementById("modalTitle").innerText =
        "Add Technician";

    document.getElementById("editIndex").value = "";

    document.getElementById("techID").value = "";

    document.getElementById("techName").value = "";

    document.getElementById("skillContainer").innerHTML = "";


    createSkillRow("General");


    document.getElementById(
        "technicianModal"
    ).style.display = "flex";

}


function closeModal() {

    document.getElementById(
        "technicianModal"
    ).style.display = "none";

}


function getSkillsFromForm() {

    const rows =
        document.querySelectorAll(".skill-row");

    const skills = [];


    rows.forEach(row => {

        const select =
            row.querySelector(".skill-select");

        const other =
            row.querySelector(".other-input");


        let skill = select.value;


        if (skill === "Other") {

            skill = other.value.trim();

        }


        if (skill) {

            skills.push(skill);

        }

    });


    return skills;

}


function saveTechnician() {

    const id =
        document.getElementById("techID")
        .value.trim();

    const name =
        document.getElementById("techName")
        .value.trim();

    const editIndex =
        document.getElementById("editIndex")
        .value;

    const skills =
        getSkillsFromForm();


    if (!id || !name) {

        alert(
            "Please enter Technician ID and Name."
        );

        return;

    }


    if (skills.length === 0) {

        alert(
            "Please add at least one skill."
        );

        return;

    }


    const duplicate =
        technicians.some((tech, index) =>
            tech.id.toLowerCase() === id.toLowerCase()
            &&
            String(index) !== String(editIndex)
        );


    if (duplicate) {

        alert(
            "Technician ID already exists."
        );

        return;

    }


    if (editIndex === "") {

        technicians.push({

            id: id,

            name: name,

            skills: skills,

            status: "Active"

        });

    } else {

        technicians[editIndex].id = id;

        technicians[editIndex].name = name;

        technicians[editIndex].skills = skills;

    }


    saveData();

    renderTechnicians();

    closeModal();

}


function editTechnician(index) {

    const tech =
        technicians[index];


    document.getElementById("modalTitle").innerText =
        "Edit Technician";


    document.getElementById("editIndex").value =
        index;


    document.getElementById("techID").value =
        tech.id;


    document.getElementById("techName").value =
        tech.name;


    document.getElementById(
        "skillContainer"
    ).innerHTML = "";


    tech.skills.forEach(skill => {

        createSkillRow(skill);

    });


    document.getElementById(
        "technicianModal"
    ).style.display = "flex";

}


function toggleTechnician(index) {

    technicians[index].status =
        technicians[index].status === "Active"
        ? "Inactive"
        : "Active";


    saveData();

    renderTechnicians();

}


renderTechnicians();