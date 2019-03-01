function myfunction() {
    let num = document.getElementById("models").value;
    let num2 = document.getElementById("attributesPerModel").value;
    let ans = parseInt(num) * parseInt(num2);
    document.getElementById("ans").innerHTML = 'Answer: ' + ans;
}
