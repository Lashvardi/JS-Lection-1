// ჯავასკრიპტი არის არა ტიპიზირებული პროგრამირების ენა,
// ჯავასკრიპტი არის ობიექტზე ორიენტირებული ენა.

// კონსოლში რაღაც ტექსტის გამოტანა!
console.log("Hello World!");
console.warn("Warning! This App Is Not Working On This Line");
console.warn("Warning! This App Is Not Working On This Line");
console.error("Error! This App Is Not Working On This Line");


// ამოაგდებს ფანჯარას სადაც შეგვიძლია მომხამრებელს რაღაც შეტყობიენბა
// გამოვუტანთ!
// alert("This is My First Alert")

// მივმაროთ ჩვენს დოკუმენტს, და h1 რომელსაც აქვს id #HelloWorld ში ჩავწეროთ ტექსტი
// აიღე ელემენტი id ს მიხედვით

document.getElementById("HelloWorldInnerHtml").innerHTML = "<mark>Es aris teqsti javascriptidan</mark>";

document.getElementById("helloWOrldInnerText").innerText = "<mark>Es aris teqsti javascriptidan</mark>";

// ჯავასკრიპტიდან შეგვიძლია ელემენტის სტილის შეცვლა
document.getElementById("helloWOrldInnerText").style.color = "red";
document.getElementById("helloWOrldInnerText").style.backgroundColor = "black";
document.getElementById("helloWOrldInnerText").style.fontSize = "30px";

// ჯერ მივმართავთ დოკუმენტს შემდგომ ვიძახებთ იმ ფუნქციას რაშიც ვუთითებთ ან კლასს ან აიდის მაგალითად getElementById ს შემთხვევაში (" აქ ვწერთ აიდის სახელს")
 

// აუცილებელია რომ მივუთითოთ ინდექსი 
// რადგან თეგი შეიძლება შეგხვდეს როგორც 1 ასევე 100, ჯავასკრიპტმა არ იცის რომელ ერთს უნდა ემუშავოს
// შესაბამისად ჩვენ ვართ ვალდებულები რომ მივუთითო ინდექსი.
// დავიმახსოვროთ პროგრამირაბეში თვლა იწყება 0-დან. 0 1 2 3 4, ამიტომ თუ გვინდა მეხუთე ელემენტის შეცვლა ჩვენ უნდა მივუთითოთ ინდექსი 4
document.getElementsByTagName("p")[0].style.color = "red";
document.getElementsByTagName("p")[1].style.color = "red";


// აუცილებელია რომ მივუთითოთ ინდექსი 
document.getElementsByClassName("Heading")[0].innerText = "Hello World";


// querySelector მეშვეობით მოვნიშნოთ ნებისმიერი ელემენტი როგორიცაა id, class, Tag
document.querySelectorAll("h4")[0].innerText = "Hello World";
document.querySelectorAll("h4")[0].style.color = "yellow";

document.querySelectorAll("#QuerySelector")[0].innerText = "Hello From Id";
document.querySelectorAll(".QuerySelectorWithClass")[0].innerText = "Hello From Class";

document.querySelectorAll(".QuerySelectorWithClass")[0].style.color = "red";
document.querySelectorAll("#QuerySelector")[0].style.color = "green"

// querySelectorAll ის მეშვეობით არ გვიწევს დანარჩენი მეთოდების გამოყენება როგოირცაა getElementsByTagName,
// getElementsByClassName, getElementById პირდაპირ შეგვიძლია გამოვიყენოთ querySelectorAll და 
// იქვე მივუთითოთ რას ვემუშავებით



// აიდის შემთხვევაში ეს არის #
// კლასის შემთხვევაში ეს არის .
// თეგის შემთხვევაშ ეს არის თეგის სახელი


// innerHtml -ს და innerText ს შორის სხვაობა არის ის რომ innerHtml-ს შეუძლია html თეგების აღქმა





