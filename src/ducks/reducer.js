const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}
const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPDATE_AGENT = 'UPDATE_AGENT';
const UPDATE_COST = 'UPDATE_COST'; 
const UPDATE_DOWNPAYMENT = 'UPDATE_DOWNPAYMENT';
const UPDATE_CREDIT = 'UPDATE_CREDIT';
const UPDATE_HISTORY = 'UPDATE_HISTORY';
const UPDATE_ADDRESS1 = 'UPDATE_ADDRESS1';
const UPDATE_ADDRESS2 = 'UPDATE_ADDRESS2';
const UPDATE_ADDRESS3 = 'UPDATE_ADDRESS3';
const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME';
const UPDATE_LASTNAME = 'UPDATE_LASTNAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';

function reducer(state = initialState, action){
    switch (action.type) {
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, {loanType: action.payload});

        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, {propertyType: action.payload});

        case UPDATE_CITY:            
            return Object.assign({}, state, {city: action.payload});

        case UPDATE_PROP:
            return Object.assign({}, state, {propToBeUsedOn: action.payload});

        case UPDATE_FOUND:
            return Object.assign({}, state, {found: action.payload});

        case UPDATE_AGENT:
        console.log(action.payload);
        
            return Object.assign({}, state, {realEstateAgent: action.payload});

        case UPDATE_COST:
            return Object.assign({}, state, {cost: action.payload});

        case UPDATE_DOWNPAYMENT:
            return Object.assign({}, state, {downPayment: action.payload});
            
        case UPDATE_CREDIT:
            return Object.assign({}, state, {credit: action.payload});

        case UPDATE_HISTORY:
            return Object.assign({}, state, {history: action.payload});

        case UPDATE_ADDRESS1:
            return Object.assign({}, state, {addressOne: action.payload});

        case UPDATE_ADDRESS2:
            return Object.assign({}, state, {addressTwo: action.payload});

        case UPDATE_ADDRESS3:
            return Object.assign({}, state, {addressThree: action.payload});
        
        case UPDATE_FIRSTNAME:
            return Object.assign({}, state, {firstName: action.payload});

        case UPDATE_LASTNAME:
            return Object.assign({}, state, {lastName: action.payload});

        case UPDATE_EMAIL:
            return Object.assign({}, state, {email: action.payload});   
        default:
        return state
    }
}

export function updateLoan(loantype){
    return{
        type: UPDATE_LOAN_TYPE,
        payload: loantype,
    }
}
export function updateProperty(property){
    return{
        type: UPDATE_PROPERTY_TYPE,
        payload: property,
    }
}
export function updateCity(city){
    return{
        type: UPDATE_CITY,
        payload: city
    }
}
export function updateProp(prop){
     return{
         type: UPDATE_PROP,
         payload: prop
     }
 }
export function updateFound(found){
    return{
        type: UPDATE_FOUND,
        payload: found
    }
}
export function updateAgent(agent){
    return{
        type: UPDATE_AGENT,
        payload: agent
    }
}
export function updateCost(cost){
    return{
        type: UPDATE_COST,
        payload: cost
    }
}
export function updateDownPayment(payment){
    return{
        type: UPDATE_DOWNPAYMENT,
        payload: payment
    }
}
export function updateCredit(score){
    return{
        type: UPDATE_CREDIT,
        payload: score
    }
}
export function updateHistory(history){
    return{
        type: UPDATE_HISTORY,
        payload: history
    }
}
export function updateAddress1(line){
    return{
        type: UPDATE_ADDRESS1,
        payload: line
    }
}export function updateAddress2(line){
    return{
        type: UPDATE_ADDRESS2,
        payload: line
    }
}export function updateAddress3(line){
    return{
        type: UPDATE_ADDRESS3,
        payload: line
    }
}
export function updateFirstName(name){
    return{
        type: UPDATE_FIRSTNAME,
        payload: name
    }
}
export function updateLastName(name){
    return{
        type: UPDATE_LASTNAME,
        payload: name
    }
}
export function updateEmail(email){
    return{
        type: UPDATE_EMAIL,
        payload: email
    }
}
export default reducer;