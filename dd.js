let counter = 1;
let c=0;
function addCourse() {
let add = document.createElement("form");
add.classList.add("add_new", `key-${counter}`);
const course_name = `
<form class="add_new key-${counter}">
<input type="text" placeholder="Enter GPA" class="courses key-${counter}" required>
<input type="number" placeholder="Select Sem" class="credit-units key-${counter}"
required>
</form>
`;
add.innerHTML = course_name;
document.getElementById("course-wrapper").appendChild(add);
counter++;
}
function removeCourse() {
let rem = document.querySelector("form.add_new");
rem.remove();
}
const reports = [];
function calculate() {
const CGPA = document.getElementById("cgpa-calc");
const SELECT = document.querySelectorAll("select.grade");
const UNIT = document.querySelectorAll("input.courses");
const courseReport = {};
const lGrade = [];
const lUnit = [];
let totalUnits = 0;
UNIT.forEach((e) => {
const unitValue = parseFloat(e.value);
totalUnits += unitValue;
lUnit.push(unitValue);
c++;
});
const gpa=totalUnits/c;
if (gpa >= 0){
CGPA.textContent = "Your CGPA is " + gpa.toFixed(2);
} else {
CGPA.textContent = "Please enter your correct grade and credit units";
}
}
