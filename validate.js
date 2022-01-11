var name = document.forms["RegForm"]["name"].value;
            var email = document.forms["RegForm"]["email"].value;
            var nic = document.forms["RegForm"]["nic"].value;
            var tel = document.forms["RegForm"]["tel"].value;
            var pass = document.forms["RegForm"]["pass"].value;
            var repass = document.forms["RegForm"]["repass"].value;

            var letters = /^[A-Za-z]+$/;
            var nicletters = /^[A-Z a-z0-9]+$/;
            var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var phoneno = /^[A-Z a-z0-9]+$/;

            if(name.length > 20 ){
                document.getElementById('error').innerHTML = "Name field should accept only string and spaces and no more than 20 characters";
                return false;
            }

            if(!name.match(letters)){
                document.getElementById('error').innerHTML = "only characters & spaces";
                return false;
            }