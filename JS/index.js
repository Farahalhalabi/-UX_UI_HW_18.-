const myfunc = $(document).ready(function () {
    var check=true
    $(".alert-box").mouseenter(function () {
        if (check === true) {
            alert("Welcome to Farah's Portfolio!");
            check=false

        }
        
    });
});
