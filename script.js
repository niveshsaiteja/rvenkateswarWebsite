const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

let eventsSideBar = document.getElementById("eventSideBar");
let companiesSideBar = document.getElementById("companiesSideBar");
let upcomingSideBar = document.getElementById("upcomingSideBar");
let messageSideBar = document.getElementById("messageSideBar");
let teamSideBar = document.getElementById("teamSideBar");

let events = document.getElementById("events");
let companies = document.getElementById("companies");
let upcoming = document.getElementById("upcoming");
let message = document.getElementById("message");
let team = document.getElementById("team");


eventsSideBar.onclick = function(){
    events.classList.add("d-block");
	events.classList.remove("d-none");
	companies.classList.add("d-none");
	companies.classList.remove("d-block");
	upcoming.classList.add("d-none");
	upcoming.classList.remove("d-block");
	message.classList.add("d-none");
	message.classList.remove("d-block");
	team.classList.add("d-none");
	team.classList.remove("d-block");
};

companiesSideBar.onclick = function(){
    companies.classList.add("d-block");
	companies.classList.remove("d-none");
	events.classList.add("d-none");
	events.classList.remove("d-block");
	upcoming.classList.add("d-none");
	upcoming.classList.remove("d-block");
	message.classList.add("d-none");
	message.classList.remove("d-block");
	team.classList.add("d-none");
	team.classList.remove("d-block");
};

upcomingSideBar.onclick = function(){
    upcoming.classList.add("d-block");
	upcoming.classList.remove("d-none");
	events.classList.add("d-none");
	events.classList.remove("d-block");
	companies.classList.add("d-none");
	companies.classList.remove("d-block");
	message.classList.add("d-none");
	message.classList.remove("d-block");
	team.classList.add("d-none");
	team.classList.remove("d-block");
};

messageSideBar.onclick = function(){
    message.classList.add("d-block");
	message.classList.remove("d-none");
	events.classList.add("d-none");
	events.classList.remove("d-block");
	upcoming.classList.add("d-none");
	upcoming.classList.remove("d-block");
	companies.classList.add("d-none");
	companies.classList.remove("d-block");
	team.classList.add("d-none");
	team.classList.remove("d-block");
};

teamSideBar.onclick = function(){
    team.classList.add("d-block");
	team.classList.remove("d-none");
	events.classList.add("d-none");
	events.classList.remove("d-block");
	upcoming.classList.add("d-none");
	upcoming.classList.remove("d-block");
	message.classList.add("d-none");
	message.classList.remove("d-block");
	companies.classList.add("d-none");
	companies.classList.remove("d-block");
};