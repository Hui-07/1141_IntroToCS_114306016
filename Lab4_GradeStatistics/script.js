var mathInput = document.getElementById("mathInput");
var englishInput = document.getElementById("englishInput");
var submitBtn = document.getElementById("submitBtn");
var gradeBody = document.getElementById("gradeBody");

var mathAvgDisplay = document.getElementById("mathAvg");
var englishAvgDisplay = document.getElementById("englishAvg");
var overallAvgDisplay = document.getElementById("overallAvg");

var rowCount = 1;
var grades = []; 

submitBtn.addEventListener("click", function () {
    var mathScore = parseFloat(mathInput.value);
    var englishScore = parseFloat(englishInput.value);

    if (isNaN(mathScore) || isNaN(englishScore)) {
        alert("Please enter numbers");
        return;
    }

    var rowAvg = (mathScore + englishScore) / 2;

    var newRow = document.createElement("tr");
    newRow.innerHTML ="<td>" + rowCount + "</td>" + 
                   "<td>" + mathScore + "</td>" + 
                   "<td>" + englishScore + "</td>" + 
                   "<td>" + rowAvg.toFixed(2) + "</td>";
    gradeBody.appendChild(newRow);

    grades.push({
        math: mathScore,
        english: englishScore,
        avg: rowAvg
    });

    rowCount++;
    mathInput.value = "";
    englishInput.value = "";

    updateColumnAverages();
});

function updateColumnAverages() {
    var totalMath = 0;
    var totalEnglish = 0;
    var totalOverall = 0;

    for (var i = 0; i < grades.length; i++) {
        totalMath += grades[i].math;
        totalEnglish += grades[i].english;
        totalOverall += grades[i].avg;
    }

    var count = grades.length;
    
    mathAvgDisplay.innerText = (totalMath / count).toFixed(2);
    englishAvgDisplay.innerText = (totalEnglish / count).toFixed(2);
    overallAvgDisplay.innerText = (totalOverall / count).toFixed(2);
}