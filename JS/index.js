const myfunc = $(document).ready(function () {
    var check=true
    $(".mySkills").mouseenter(function () {
        if (check === true) {
            alert("Welcome to Farah's Portfolio!");
            check=false

        }
        
    });
});
