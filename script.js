function showalert(){
    const ename = document.getElementById('name').value.trim();
    const eemail = document.getElementById('email').value.trim();
    const esalary = document.getElementById('salary').value;
    const ehiredate = document.getElementById('date').value.trim();

    var USDollar = new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency:"USD"
    });


    var formatedSalary = USDollar.format(esalary);

    if(ename && eemail && esalary && ehiredate != null){
        alert(
            "1. Name: "+ ename + "\n" +
            "2. Email: "+ eemail + "\n" +
            "3. Salary: "+ formatedSalary + "\n"+
            "4. Hiredate: "+ ehiredate 
        );
    }else{
        (
            "Data not allowed empty"
        )
        
    }
}
