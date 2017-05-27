/*/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name" : "Shadman Waris",
    "role" : "Front End Engineer",
    "contacts" :
        {
            "mobile" : "780-878-2888",
            "email" : "shadin4u@live.com",
            "github" : "shadmanwaris",
            "twitter" : "@shadmanwaris",
            "location" : "India"
        },
    "welcomeMessage" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis molestie arcu sed rhoncus.",
    "skills" : [ "awesomemess", "delivering things", "cyrogenic sleep", "saving the universe"],
    "biopic" : "images/deadpool.jpg"
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedContacts = HTMLcontactGeneric.replace("%data%", bio.contacts);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedMessage);
    $(".biopic").append(formattedBiopic);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);

$("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }

};

bio.display();

var education = {
    "schools" : [
        {
            "name": "Creane Memorial School",
            "location": "Gaya",
            "degree": "Matriculation",
            "majors": ["Maths","Science","Social Science", "English"],
            "dates": "2008",
            "url": "https://www.creaneschool.com/"
        },
        {
            "name": "Hamdard Public School",
            "location": "New Delhi",
            "degree": "Intermediate",
            "majors": ["Physics","Chemistry","Maths","Computer Science"],
            "dates": "2010",
            "url": "https://www.hamdardpublicschool.com/"
        },
        {
            "name": "Lovely Professional University",
            "location": "Punjab",
            "degree": "Bachelor of Engineering",
            "majors": ["Electronics and Communication"],
            "dates": "2014",
            "url": "https://www.lpu.in/"
        }
    ],

    "onlineCourses" : [
        {
            "title" : "Front End Developer Course",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://in.udacity.com/"
        },
        {
            "title" : "Full Stack Developer Course",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://in.udacity.com/"
        }
    ]
};

education.display = function () {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolMajor);
        $(".education-entry:last").append(formattedSchoolLocation);

    }
    $(".education-entry").append(HTMLonlineClasses);

    for (var j = 0; j < education.onlineCourses.length; j++) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[j].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[j].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[j].url);

        $(".education-entry:last").append(formattedOnlineTitle);
        $(".education-entry:last").append(formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);

    }
};

education.display();

var work = {
    "jobs" : [
        {
            "employer": "Tech Mahindra",
            "title": "Customer Care Executive" ,
            "location": "New Delhi",
            "dates": "2014-2015",
            "description": "Aenean et sem quam. Duis diam massa, eleifend sed interdum lacinia, vehicula in augue. Nulla luctus magna in euismod convallis. Integer consectetur interdum risus at commodo. Nulla at varius mi. Curabitur ut consequat lacus. Vivamus ut nisi sit amet lectus laoreet rutrum a et lectus. Nullam pretium dapibus felis, at vehicula tortor rutrum vel. Aenean eget sollicitudin sem. Fusce malesuada volutpat dignissim. Aenean sodales ex neque. Nulla quis laoreet erat. Integer ornare orci ut eleifend blandit. Vestibulum ac semper est."
        },
        {
            "employer": "Lybrate Pvt Ltd",
            "title": "Project Manager" ,
            "location": "New Delhi",
            "dates": "2015 - 2017",
            "description": "Quisque egestas rhoncus mauris, at vulputate mauris placerat aliquet. Aenean iaculis tempor ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum tempor neque elit, non imperdiet nisi dictum feugiat. Sed finibus egestas condimentum. Pellentesque sit amet elit id est vehicula faucibus vitae quis tellus. Phasellus at gravida enim, sed congue sem. Aenean maximus leo at magna vehicula luctus."
        }
    ]
};


work.display = function() {
    for(var i=0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
        var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);

        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDescription);
    }
};

work.display();

var projects = {
    "projects" : [
        {
            "title" : "Portfolio" ,
            "dates" : "2016",
            "description": "Vivamus tincidunt justo vitae est malesuada, at aliquet ante porta. In ut congue orci. Aliquam varius est neque, in venenatis augue blandit id. Curabitur eleifend egestas nisi eu varius. Pellentesque cursus quam eu ligula vestibulum, et aliquam arcu feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            "images" : [ "images/project1.png"]
        },
        {
            "title" : "Sample Project 2" ,
            "dates" : "2017",
            "description": "Vivamus tincidunt justo vitae est malesuada, at aliquet ante porta. In ut congue orci. Aliquam varius est neque, in venenatis augue blandit id. Curabitur eleifend egestas nisi eu varius. Pellentesque cursus quam eu ligula vestibulum, et aliquam arcu feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            "images" : [ "images/desk.png"]
        }
    ]
};

projects.display = function () {
    for ( var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        for (img = 0; img < projects.projects[i].images.length; img++) {
            var formattedProjectImages = HTMLprojectImage.replace("%data%",projects.projects[i].images[img]);
            $(".pro-image").append(formattedProjectImages);
        }
    }
};

projects.display();



function inName (name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


  $(document).ready(function(){
    $('.img-zoom').hover(function() {
        $(this).addClass('transition');

    }, function() {
        $(this).removeClass('transition');
    });
  });
