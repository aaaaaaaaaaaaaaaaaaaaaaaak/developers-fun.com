function message() {
    let SentYet = false
    let name = document.getElementById("Input1").value;
    let message = document.getElementById("Input2").value;
  
    if (SentYet == false) {
      const webhook = "https://discord.com/api/webhooks/1275787515265028137/9lD2eThfQV6dcIuBvijt5EsmYRPAwVsotPpeO_4M-J5eAwgilvciOcAddLuOghw5CcHI";
      const contents = `A user wanted the game: ${name}\nWith the url: ${message} <@937481339362508820>`;
      const embed = discord.Embed(
        title = 'A new request has been made.',
        description =  `A user wanted ${name}/nWith the matching url: ${message}/n<@937481339362508820>`
        )
      const request = new XMLHttpRequest();
      request.open("POST", webhook);
      request.setRequestHeader('Content-type', 'application/json');
      const params = {
        content: contents
      }
      request.send(JSON.stringify(params));
      SentYet = true
    } else {
      console.log('Too many requests to webhooks')
    }
  }