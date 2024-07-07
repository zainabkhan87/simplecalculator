function makecalculator(){
    let num1= Number(prompt('enter num1'))
    let num2= Number(prompt('enter num2'))
    let operation= prompt('enter an operator')
    switch(operation){
        case '+':
            alert('result '+(num1+num2))
            break

        case '-':
            alert('result '+(num1-num2))
            break

        case '*':
            alert('result '+(num1*num2))
            break

        case '/':
            alert('result '+(num1/num2))
            break
            
        default:'wrong operator'    

    }
}
makecalculator()