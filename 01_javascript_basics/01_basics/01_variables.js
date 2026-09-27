const accountId = 144553;
let accountEmail = "test@google.com";
var accountPassword = "12345password";
accountCity = "Mumbai";

// accountId = 2; // Not allowed: const variables cannot be reassigned

accountEmail = "hc@hc.com";
accountPassword = "78901password";
accountCity = "Bengaluru";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);