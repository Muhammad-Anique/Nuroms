
export const EmailCheck =(email)=>{
    const regex = /^([a-zA-Z])(\d{2})(\d{4})@lhr\.nu\.edu\.pk$/;
    const match = email.match(regex);
    if (match) {
        return 1;
      } else {
        console.log('Email address is not in the expected format');
        return 0;
    }      
}

export const RollExtract =(email)=>{
    const regex = /^([a-zA-Z])(\d{2})(\d{4})@lhr\.nu\.edu\.pk$/;
    const match = email.match(regex);
    if (match) {
        const extractedString = `${match[2]}${match[1].toUpperCase()}-${match[3]}`;
        return extractedString;
      } 
    else
      return '99Z-9999'
}


export const PhoneCheck =(phone)=>{
    const regex = /^03\d{9}$/; // regular expression to match number starting with 03 and containing 11 digits
    return regex.test(phone); // test if the phone number matches the regular expression

}

export const PasswordCheck =(Password,ConfirmPassword)=>{
    if(Password==ConfirmPassword) return 1; else return 0;

}

export const DegreeCheck =(Degree)=>{
    if (Degree === "BSCS" ||Degree === "BSMS" )
        return 1;
    else return 0;

}

