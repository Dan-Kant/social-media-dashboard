const switchBtn = document.querySelector('.theme-switcher-background');
const themeSwitchRound = document.querySelector('.theme-switcher');
const overallReports = document.querySelectorAll('.overall-report');
const introText = document.querySelector('.intro-text');
const overallNumbers = document.querySelectorAll('.overall-number');
const dailyReports = document.querySelectorAll('.daily-report');
const dailyNumbers = document.querySelectorAll('.daily-number');
const overview = document.querySelector('.overview');

window.addEventListener('DOMContentLoaded', appearAnimation);
switchBtn.addEventListener('click', darkMode);


function appearAnimation() {
        overallReports.forEach((overallReport) => {
                overallReport.classList.add('appear-animation');
        });
        dailyReports.forEach((dailyReport) => {
                dailyReport.classList.add('appear-animation');
        });
}

function darkMode() {
        switchBtn.classList.toggle('bg-color-switch');
        themeSwitchRound.classList.toggle('round-switch');
        document.body.classList.toggle('bg-change');
        introText.classList.toggle('text-textWhite');
        overview.classList.toggle('text-textWhite');

        overallReports.forEach((overallReport) => {
                overallReport.classList.toggle('bg-cards');
        });
        overallNumbers.forEach((overallNumber) => {
                overallNumber.classList.toggle('text-textWhite');
        });
        dailyReports.forEach((dailyReport) => {
                dailyReport.classList.toggle('bg-cards');
        });
        dailyNumbers.forEach((dailyNumber) => {
                dailyNumber.classList.toggle('text-textWhite');
        });
};