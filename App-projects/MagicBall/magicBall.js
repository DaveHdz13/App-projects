let ballChoice = Math.floor(Math.random() * 9);
let userQuestion = "Should I eat pizza tomorrow?"

function ballResponse(ballChoice, userQuestion) {
  switch(ballChoice) {
    case 0:
      console.log("Question:    " + userQuestion)
      console.log("8 Ball:     Yes - definitely.")
    break;
    case 1:
      console.log("Question:    " + userQuestion)
      console.log("It is decidedly so.")
    break;
    case 2:
      console.log("Question:    " + userQuestion)
      console.log("8 Ball:     Without a doubt.")
    break;
    case 3:
      console.log("Question:    " + userQuestion)
      console.log("8 Ball:     Reply hazy, try again")
    break;
    case 4:
      console.log("Question:    " + userQuestion)
      console.log("8 Ball:     Ask again later.")
    break;
    case 5:
      console.log("Question:    " + userQuestion)
      console.log("8 Ball:     Better not tell you now.")
    break;
    case 6:
      console.log("Question:    " + userQuestion)
      console.log("My sources say no.")
    break;
    case 7:
      console.log("Question:    " + userQuestion)
      console.log("8 Ball:     Outlook not so good.")
    break;
    case 8:
      console.log("Question:    " + userQuestion)
      console.log("8 Ball:     Very doubtful.")
    break;
  }
}

ballResponse(ballChoice, userQuestion)