var heading1 = "Name:", heading2 = "Career:", heading3 = "Description:", name = "William Perry", career = "Finance", description = "26 year old male, Gemini, ambidextrous.";
console.log(heading1, name.toUpperCase() + "\n" + heading2, career, "\n" + heading3, description);
var heading4 = "My Interests:", interests1 = "Exercise", interests2 = "Strategy", interests3 = "Political Science";
console.log(heading4, "\n" + "*", interests1, "\n" + "*", interests2, "\n" + "*", interests3);
var heading5 = "My Previous Experience:", heading6 = "My Skills:";
var company = ["ServisFirst Bank", "Capital Solutions", "New York Life"], title = ["Assistant Relations Manager ", "In-House Counsel ", "Financial Professional"], duties = ["Represent the Bank in various community, civic and community reinvestment functions to further enhance the Bank’s image and develop additional business. Provide exceptional customer service by answering client questions; investigating and correcting errors; and resolving problems or other issues.", "Assisted in the auditing of 5 companies during the application for SBA loans. Built compliant financial statements using past tax and income reports.", "Consistently acquired new clients and managed relationships into selling up larger additions to existing policies."];
function displayPosition(company, title, duties) {
    console.log(company.toUpperCase() + "\n" + title + "\n" + duties);
}
;
console.log(heading5);
for (var i = 0; i < company.length; i++) {
    displayPosition(company[i], title[i], duties[i]);
}
;
var skills = [
    {
        skill: "Charisma",
        isCool: false
    },
    {
        skill: "Kite-Surfing",
        isCool: true
    },
    {
        skill: "NASCAR Racing",
        isCool: true
    },
    {
        skill: "Guessing",
        isCool: false
    },
    {
        skill: "Video Games",
        isCool: false
    },
    {
        skill: "Space Exploration",
        isCool: true
    },
    {
        skill: "Writing bad code",
        isCool: false
    },
];
function displaySkill(arr) {
    arr.forEach(function (itm) {
        if (itm.isCool === true) {
            console.log("* BAM: " + itm.skill);
        }
        else {
            console.log("* " + itm.skill);
        }
    });
}
;
displaySkill(skills);
