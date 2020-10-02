function send() {
    const content = document.getElementById("form").elements;

    var data = {
        name: content[0].value,
        phone_number: content[1].value,
        email: content[2].value,
        message: content[3].value,
        id: "444",
    }

    var doSend = true;

    for (let element in data) {
        console.log(data[element]);
        if (data[element] === "") {
            fail("Ensure all all details are filled out.");
            doSend = false;
            break;
        }
    }

    if (doSend) {
        console.log("sending");
        fetch('https://us-central1-cybersaur.cloudfunctions.net/email-contact-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                success();
            })
            .catch((error) => {
                console.error('Error:', error);
                fail("Technical problem, please email therapy@debbie-livermore.co.uk")
            });
    }
}

function success() {
    document.getElementById("success").style.display = "block";
    document.getElementById("fail").style.display = "none";
}

function fail(error) {
    document.getElementById("success").style.display = "none";
    document.getElementById("fail").style.display = "block";
    document.getElementById("failtext").innerHTML = "Contact request failed: " + error;
}