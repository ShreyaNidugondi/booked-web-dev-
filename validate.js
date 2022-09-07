<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<script>
    function validate(){
        re=/^[A-Za-z]+$/;
        if(!re.test(document.registration.uname.value))
        window.alert(Invalid name);
        if(!re.test(document.registration.password.value,length<6))
        window.alert("passwprd too short");
        if(!re.test(document.registration.phone.value.length<10))
        window.alert("phone too short"));
    }
</script>
<body></body>
</html>