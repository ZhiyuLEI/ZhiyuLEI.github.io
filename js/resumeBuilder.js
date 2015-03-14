var bio = {
	"name": "Zhiyu LEI",
	"role": "Web Developer & Software Developer & Data Analyst",
	"contacts": {
		"mobile": "022-014-3960",
		"email": "755899030@qq.com",
		"github": "https://github.com/ZhiyuLEI",		
		"location": "Auckland, New Zealand"
	},
	"welcomeMessage": "Motivated to develope and use electronic systems to improve patient care and public health",
	"skills": [
		"C#",
		".NET Framework",
		"Microsoft SQL Server 2008",
		"SQL stored procedures",
		"Java",
		"ASP.NET MVC",
		"JQuery",
		"AJAX",
		"HTML5/JavaScript/CSS",
		"PHP",
		"Data Mining"
	],
	"biopic": "images/passport_photo.jpg"		
}
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);  	
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedPic);

	var formattedMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedMsg);

    if(bio.skills.length > 0) {
    	$("#header").append(HTMLskillsStart);
    	for (skill in bio.skills){
		    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
    	}
    }	
}
bio.display();


var education = {
	"schools": [
		{
			"name": "Zhejiang University",
			"location": "Hangzhou, Zhejiang Province, China",
			"degree": "Bachelor",
			"majors": ["Science in Chemistry", "Medicine"],
			"dates": 2009,
			"url": "http://www.zju.edu.cn/"
		},
		{
			"name": "Zhejiang University",
			"location": "Hangzhou, Zhejiang Province, China",
			"degree": "Doctor of Medicine",
			"majors": ["Medicine"],
			"dates": 2013,
			"url": "http://www.zju.edu.cn/"
		},
		{
			"name": "Unitec Institute of Technology",
			"location": "Auckland, New Zealand",
			"degree": "Graduate Diploma",
			"majors": ["Computing Science"],
			"dates": 2015,
			"url": "http://www.unitec.ac.nz/"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-end Web Developer Nanodegree",
			"school": "Udacity",
			"dates": 2015,
            "url": "https://www.udacity.com/course/nd001"
		}
	]
}
education.display = function() {
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", 
			education.schools[school].name);		
		var formattedDegree = HTMLschoolDegree.replace("%data%", 
			education.schools[school].degree);
		var formattedEducationTitle = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedEducationTitle); 

		var formattedDates = HTMLschoolDates.replace("%data%",
			education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%",
			education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		if (education.schools[school].majors.length > 0){
			for (major in education.schools[school].majors){
				var formattedMajor = HTMLschoolMajor.replace("%data%",
					education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
	}

	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses){
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", 
			education.onlineCourses[course].title);		
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", 
			education.onlineCourses[course].school);
		var formattedOnlineTS = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineTS); 

		var formattedDates = HTMLonlineDates.replace("%data%",
			education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedurl = HTMLonlineURL.replace("%data%",
			education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedurl);
	}
}
education.display();


var work = {
	"jobs": [
		{
			"employer": "Zhejiang Children's Hospital",
			"title": "Resident Physician",
			"location": "Hangzhou, China",
            "dates": "07/2012-07/2013",
            "description": "1.Participating in a program of graduate medical education and training in pediatrics;  2.Acts as both a student and a health care provider;  3.Works closely with other members of the health care team to provide direct medical care to patients； 4.Takes medical histories, performs physical examinations, orders and interprets diagnostic studies, and performs some medical procedures supervised by more senior residents and by attending physicians."
							
		}
	]
}
work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", 
			work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",
			work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", 
			work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", 
			work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%",
			work.jobs[job].description)
		$(".work-entry:last").append(formattedDescription);
    }
}
work.display();


var projects = {
	"projects": [
		{
			"title": "Library Management Software built in Java",
			"dates": "09/2014-11/2014    URL:https://github.com/ZhiyuLEI/library-management-software",
			"description": "The built Library Management Software is to manage the day to day activities of a library. It has three types of users, the Administrator, the Receptionist and the Customer. I had designed the GUIs of the whole software. And the following functions are basically achieved by my coding. Customers are registered to the system via the registration process managed by the receptionist, they can search and borrow the books. The administrator can purchase and manage books, and manage the reports as well as the users’ authorities and the receptionist login. The receptionist is responsible for customer registration. Following the MVC design pattern more strictly could be made in the improvements of this software.",
			"images": []
		},
		{
			"title": "Glendene Cat Care Clinic Management Application built in C#",
			"dates": "7/2014-9/2014  URL: https://github.com/ZhiyuLEI/Glendene-cat-care-clinic",
			"description": "This assignment is based on a case study on the Glendene Cat Care Clinic which is a business that provides veterinary services to cat owners. The company requires a front end application for their database which has already been developed. I had completed the work by writing an application, in the language C#, which will allow the users to maintain the records stored in the database and produce the report that they need.",
			"images": []
		},
		{
			"title": "Game: Tower of Hanoi built in C#",
			"dates": "10/2014-11/2014  URL: https://github.com/ZhiyuLEI/tower-of-hanoi",
			"description": "",
			"images": []
		},
		{
			"title": "Fresh World Market Website",
			"dates": "7/2014-9/2014  URL: http://hyperdisc.unitec.ac.nz/iwd14s2/leiz03iwd/index.html",
			"description": "",
			"images": []
		},
		{
			"title": "Floral Shop Website",
			"dates": "10/2014-11/2014  URL: http://hyperdisc.unitec.ac.nz/iwd14s2/leiz03iwd/FloralShop/index.html",
			"description": "",
			"images": []
		}
	]
}
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",
			projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",
			projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",
			projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%",
					projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();


$("#mapDiv").append(googleMap);

