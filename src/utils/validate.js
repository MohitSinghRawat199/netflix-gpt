export const checkValidData =(email,password)=>{

    const isEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
    const isPassowrdValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

    if(!isEmail) return "Email is not Valid";
    if(!isPassowrdValid) return "Password not Valid";

    return null;
}