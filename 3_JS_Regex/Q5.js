// Exercise 05
// Using a regex pattern, find the email address contained within the ex5 string.

const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com or prof@mail.mcgill.ca or 123@malicious.com_'
;

const emailAddress = /\b\w+@\w+(\.[^\W_]+)+\b/g;

console.log(ex5.match(emailAddress));