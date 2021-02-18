// alert("Connected");
// while(true){
//     var str = prompt("Are we there yet?");
//     if(str === "yes" || str === "yeah"){
//         alert("Yay , we finally made it!");
//         break;
//     }
// }


var str = prompt("Are we there yet?");
while(str.indexOf("yes") === -1){
    var str = prompt("Are we there yet?");
}
alert("Yay , we finally made it!");