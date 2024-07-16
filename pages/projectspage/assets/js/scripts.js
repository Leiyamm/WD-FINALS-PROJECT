$(document).ready(function() {
    $(".project-wrapper .project-name a").mouseenter(function() {
        var projectIndex = $(this).parent().index();
        $(".project-images li").removeClass("show");
        $(".project-images li").eq(projectIndex).addClass("show");
    });
});
