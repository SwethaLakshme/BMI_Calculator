 function BMICalculator(){ 
    var Weight = prompt("Enter your weight in kg");
    var Height = prompt("Enter your height in m")
    var bmi = Weight/(Math.pow(Height,2));
    
    var h2 = document.createElement('h2');
    var bmiAnswer = document.createTextNode(' and your BMI is: '+bmi.toFixed(2));
    if(bmi<18.5)
    {
      var TextAnswer = document.createTextNode('Underweight');
    }
    else if( bmi>=18.5 && bmi<25)
    {
      var TextAnswer = document.createTextNode('Normal');
    }
    else if( bmi>=25 && bmi<30)
    {
      var TextAnswer = document.createTextNode('Overweight');
    }
    else if(bmi>30){
      var TextAnswer = document.createTextNode('Obesity');
    }
    h2.setAttribute('id','BMICalculator');
    h2.appendChild(TextAnswer);
    h2.appendChild(bmiAnswer);
    document.getElementById('flex-box-result').appendChild(h2);
 }

 function reset(){
    document.getElementById('BMICalculator').remove();
 }