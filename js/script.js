$(document).ready(function() {
	$("#content-open").click(function() {
		
		$("#content-insert").remove();
		
		$.ajax({
			url:"data.xml", 
			dataType:"xml",
			success: function(data) {
				var info = '<div id="content-insert"><h3>People</h3><ul>';
				$(data).find('person').each(function() {
					info += "<li>Name: " + $(this).find("name").text() + "<br>E-mail: " + $(this).find("email").text() + "</li>";
				});
				info += "</ul></div>";
				$("#content-container").after(info);
				
				if(!window["localStorage"]) {
					alert("No local storage. Should use cookie instead.");
					document.cookie = info;
				} else {
					localStorage.setItem('info', info);
				}
			},
			error: function() {
				alert("Error occurred");
			}
		});
		
	});
});
