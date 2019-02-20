function myfunction() {
    let num = document.getElementById("one").value;
    let num2 = document.getElementById("two").value;
    let a = Math.max(num, num2);
    return("The largest of the numbers entered is "+a)
}