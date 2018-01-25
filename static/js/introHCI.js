'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(this).text("BOOM");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
  $(".project").click(projectClick);
}

function projectClick(e) {
	e.preventDefault();

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if(description.length == 0) {
    containingProject.append("<div class='project-description'><p>Description of Project</p></div>");
	}
	else {
    //description.html("<p>Stop clicking on this! You just did it at " + (new Date()) + "</p>");
    description.fadeToggle();
	}


}
