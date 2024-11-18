document
  .getElementById("productOrderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const errors = [];
    const errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = "";

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const quantity = document.getElementById("quantity").value.trim();
    const paymentMethod = document.getElementById("paymentMethod").value;

    if (!firstName) {
      errors.push("Пожалуйста, введите имя.");
    } else if (/\d/.test(firstName)) {
      errors.push("Имя не должно содержать цифры.");
    }

    if (!lastName) {
      errors.push("Пожалуйста, введите фамилию.");
    } else if (/\d/.test(lastName)) {
      errors.push("Фамилия не должна содержать цифры.");
    }

    if (!phone || !/^(?:\+7|8)[\d\s\-()]{9}\d$/.test(phone)) {
      errors.push("Пожалуйста, введите корректный номер телефона (+7(xxx)-xxx-xx-xx).");
    }

    if (!email || !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errors.push("Пожалуйста, введите корректный адрес электронной почты.");
    }

    if (!quantity || isNaN(quantity) || Number(quantity) <= 0) {
      errors.push("Пожалуйста, введите корректное количество (больше 0).");
    }

    if (!paymentMethod) {
      errors.push("Пожалуйста, выберите способ оплаты.");
    }

    if (errors.length > 0) {
      errorMessages.innerHTML = errors.join("<br>");
    } else {
      const formData = `
          Имя: ${firstName}
          Фамилия: ${lastName}
          Телефон: ${phone}
          Электронная почта: ${email}
          Количество: ${quantity}
          Способ оплаты: ${paymentMethod}
        `;

      alert("Данные успешно отправлены!\n" + formData);
      

      document.querySelectorAll("form button")[1].style.backgroundColor = "red";

      document.getElementById("productOrderForm").reset();
      
    }
  });
