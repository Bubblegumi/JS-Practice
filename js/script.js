

// Texts inputs

const totalCost = document.getElementById('total-cost'),
        anInitialFee = document.getElementById('an-initial-fee'),
        crediTerm = document.getElementById('credit-term');

// Range inputs

const totalCostRange = document.getElementById('total-cost-range'),
        anInitialFeeRange = document.getElementById('an-initial-fee-range'),
        crediTermRange = document.getElementById('credit-term-range');

// Final inputs

const totalAmountOfCredit = document.getElementById('amount-of-credit'),
        totalMonthlyPayment = document.getElementById('monthly-payment'),
        totalRecomendedIncome = document.getElementById('recomended-income');

// all rangas

const inputsRange = document.querySelectorAll('.input-range');

// All buttons

const bankBtns =  document.querySelectorAll('.bank');

const assignValue = () => {
    totalCost.value = totalCostRange.value;
    anInitialFee.value = anInitialFeeRange.value;
    crediTerm.value = crediTermRange.value;
};

assignValue();

const banks = [
    {
        name: 'dimasbank',
        percents: 8.6
    },
    {
        name: 'denisbank',
        percents: 8.3
    },
    {
        name: 'mashabank',
        percents: 8.9
    },
    {
        name: 'jekabank',
        percents: 9.7
    }
];

let currentPercent = banks[0].percents;

for(let bank of bankBtns) {
    bank.addEventListener('click', () => {
        for(let item of bankBtns) {
            item.classList.remove('active');
        }
        bank.classList.add('active');
        takeActiveBank(bank);
    });
}

const takeActiveBank = currentActive => {
    const dataAttrValue = currentActive.dataset.name;
    const currentBank = banks.find( bank => bank.name === dataAttrValue);
    currentPercent = currentBank.percents;
    calculation(totalCost.value, anInitialFee.value, crediTerm.value);
};

for(let input of inputsRange){
    input.addEventListener('input', () => {
        assignValue();
        calculation(totalCost.value, anInitialFee.value, crediTerm.value);
    });
}

const calculation = (totalCost = 0, anInitialFee = 10000000, crediTerm = 1) => {
    /*  
        MP = monthly payment
        AC = Amount of credit
        IR = Interest rate
        Am = amounts of mounth
        MP = (AC + (((AC / 100) * IR) / 12) * AM) / AM;
    */
    let monthlyPayment; //MP
    let lounAmount = totalCost - anInitialFee; //AC
    let interestRate = currentPercent;  //IR
    let numerOfYears = crediTerm; //amounts of years
    let numberOfMonths = 12 * numerOfYears; //amounts of mounth

    monthlyPayment = (lounAmount + (((lounAmount / 100) * interestRate) / 12) * numberOfMonths) / numberOfMonths;
    const monthlyPaymentArounded = Math.round(monthlyPayment);
    if(monthlyPaymentArounded < 0) {
        return false;
    } else {
        totalAmountOfCredit.innerHTML = `${lounAmount} $`;
        totalMonthlyPayment.innerHTML = `${monthlyPaymentArounded} $`;
        totalRecomendedIncome.innerHTML = `${monthlyPaymentArounded + ((monthlyPaymentArounded / 100) * 35)}$`;
    }
};