const EmailResult = async (e) => {
  e.preventDefault();

  const result = document.getElementById("result");
  result.innerHTML = "Please wait....";
  result.classList.remove("success", "error");

  let response = await getEmailResult();

  if (response && response.status == 200) {
    result.innerHTML = "Email successfully sent!";
    result.classList.add("success");
  } else {
    result.innerHTML = "Sorry, your email was not sent.";
    result.classList.add("error");
  }

  setTimeout(() => {
    result.innerHTML = "";
    result.classList.remove("success", "error");
  }, 5000);
};

const getEmailResult = async () => {
  const form = document.getElementById("contact-form");
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  
  // Ensure the access key is present
  object.access_key = "817cffc5-dfd0-4c25-8906-e6530a0c8308";

  const json = JSON.stringify(object);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    return response;
  } catch (error) {
    console.error(error);
    document.getElementById("result").innerHTML = "Sorry, your email couldn't be sent.";
    return null;
  }
};

document.getElementById("contact-form").onsubmit = EmailResult;
