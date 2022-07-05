import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../css/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, createUserWithEmailAndPassword, get } from "firebase/auth";
import { uid } from "uid";
import Label from './Label';
import InputBox from './InputBox';
import Button from './Button';
import { async } from '@firebase/util';
import { Database } from 'firebase/database';
import { initializeApp } from "firebase/app";
import { db } from '../database/firebase'
import { collection, addDoc, Timestamp, doc } from 'firebase/firestore'



const SignForm = ()=> {



  //array object for country
  const countryList = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'AndorrA', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Bouvet Island', code: 'BV' },
    { name: 'Brazil', code: 'BR' },
    { name: 'British Indian Ocean Territory', code: 'IO' },
    { name: 'Brunei Darussalam', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cape Verde', code: 'CV' },
    { name: 'Cayman Islands', code: 'KY' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Christmas Island', code: 'CX' },
    { name: 'Cocos (Keeling) Islands', code: 'CC' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Congo, The Democratic Republic of the', code: 'CD' },
    { name: 'Cook Islands', code: 'CK' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Cote D\'Ivoire', code: 'CI' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Falkland Islands (Malvinas)', code: 'FK' },
    { name: 'Faroe Islands', code: 'FO' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'French Southern Territories', code: 'TF' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Greece', code: 'GR' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Guam', code: 'GU' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guernsey', code: 'GG' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
    { name: 'Holy See (Vatican City State)', code: 'VA' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic Of', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jersey', code: 'JE' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
    { name: 'Korea, Republic of', code: 'KR' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Lao People\'S Democratic Republic', code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libyan Arab Jamahiriya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Macao', code: 'MO' },
    { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia, Federated States of', code: 'FM' },
    { name: 'Moldova, Republic of', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Netherlands Antilles', code: 'AN' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Niue', code: 'NU' },
    { name: 'Norfolk Island', code: 'NF' },
    { name: 'Northern Mariana Islands', code: 'MP' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestinian Territory, Occupied', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Pitcairn', code: 'PN' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Puerto Rico', code: 'PR' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Reunion', code: 'RE' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russian Federation', code: 'RU' },
    { name: 'RWANDA', code: 'RW' },
    { name: 'Saint Helena', code: 'SH' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Pierre and Miquelon', code: 'PM' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia and Montenegro', code: 'CS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Svalbard and Jan Mayen', code: 'SJ' },
    { name: 'Swaziland', code: 'SZ' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syrian Arab Republic', code: 'SY' },
    { name: 'Taiwan, Province of China', code: 'TW' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania, United Republic of', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tokelau', code: 'TK' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Turks and Caicos Islands', code: 'TC' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'United States Minor Outlying Islands', code: 'UM' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Viet Nam', code: 'VN' },
    { name: 'Virgin Islands, British', code: 'VG' },
    { name: 'Virgin Islands, U.S.', code: 'VI' },
    { name: 'Wallis and Futuna', code: 'WF' },
    { name: 'Western Sahara', code: 'EH' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' }
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [check, setCheck] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const [showEye, setShowEye] = useState("bi bi-eye-slash passIcon")
  const [showConfirmPassword, setShowConfirmPassword] = useState("password");
  const [showEye1, setShowEye1] = useState("bi bi-eye-slash passIcon")
  const [button, setButton] = useState("Create Account")
  const [spin, setSpin] = useState(false)
  const navigate = useNavigate();

  // Validation starts here

  const validateName = () => {
    if (name === null || name === "") {
      setNameError("Name can't be blank");
      return false;
    }
    else if (name.match(/^ *$/)) {
      setNameError("This field is required!");
      return false;
    }
    else {

      setNameError("");
      return true;
    }
  }

  // function to validate Email

  const emailValid = () => {
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
      setEmailError("Please enter valid email");
      return false;
    }
    else {
      setEmailError("");
      return true;
    }
  }

  //Function to validate Country

  const countryValid = () => {
    if (country === "" || country === null) {
      setCountryError("Please select country");
      return false;
    }
    else {
      setCountryError("");
      return true;
    }
  }

  // function to validate password

  const passwordValid = () => {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (password.match(passw)) {
      setPasswordError("");
      return true;
    }
    else {
      setPasswordError("Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
      return false;
    }
  }

  // function to validate confirm password

  const confirmPasswordValid = () => {
    if (password === confirmPassword) {
      setConfirmPasswordError("");
      return true;
    }
    else {
      setConfirmPasswordError("This password is not matched!")
    }
  }

  //function to validate Gender 

  const genderValid = () => {
    if (gender === "" || gender === null) {
      setGenderError("Please select your gender!");
      return false;
    }
    else {
      setGenderError("");
      return true;
    }
  }

  //form validate function

  const formValidate = () => {
    return validateName() && emailValid() && countryValid() && passwordValid() && confirmPasswordValid() && genderValid();
  }

  //handleName Function 
  const handleName = (event) => {
    setName(event.target.value)
  }

  //handleEmail Function

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  //handlePassword Function

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  //handleConfirmPassword

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value)
  }

 //handle Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formValidate()) {
      setButton("")
      setSpin(true)
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user.uid);
          setUserDetalils(user)
          // ...
          setSpin(false)
          toast.success("Account Created")
          setButton("Create Account")
          navigate("/login")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSpin(false)

          // ..
        });

    }

    else {
      setSpin(false)
      setButton("Create Account")
      // toast.error("Account Created Unsuccessful!")
    }

  }
  //set User details to the firestore database
  const setUserDetalils = async (user) => {
    try {
      await addDoc(collection(db, 'Users'), {
        'name': name,
        'email': email,
        'country': country,
        'password': password,
        'gender': gender,
        'id': user.uid,
        'created': Timestamp.now()

      })
    }
    catch (error) {
      setSpin(false)
      setButton("Create Account")
      console.log(error)
    }
    finally {
      setSpin(false)
      setButton("Create Account")
    }
  } 


  //handleOnSubmit function

  const handleOnSubmit = (e) => {
    e.preventDefault();

  }

  //handle handleSubmit1

  const handleSubmit1 = () => {
    navigate("/login")
  }

  //handle country function
  const handleCountry = (event) => {
    setCountry(event.target.value)
  }

  //handleGender function

  const handleRadioMale = () => {
    setGender('Male')
  }

  const handleRadioFemale = () => {
    setGender('Female')
  }

  const handleRadioOthers = () => {
    setGender('Others')
  }


  //handle check function

  const handleCheck = (event) => {
    setCheck(event.target.value)
  }


  //handlePassClick Function

  const handlePassClick = () => {
    if (showPassword === 'password') {
      setShowPassword("text")
      setShowEye("bi bi-eye passIcon")
    }
    else {
      setShowPassword("password");
      setShowEye("bi bi-eye-slash passIcon")
    }
  }

  const handleConfirmPassClick = () => {
    if (showConfirmPassword === "password") {
      setShowConfirmPassword("text")
      setShowEye1("bi bi-eye passIcon")
    }
    else {
      setShowConfirmPassword("password");
      setShowEye1("bi bi-eye-slash passIcon")
    }
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <Label labelName="Name" />
          <InputBox type="text" handleChange={handleName} className="form-control" value={name} error={nameError} />
        </div>

        <div className="mb-3">
          <Label labelName="Email" />
          <InputBox type="email" handleChange={handleEmail} className="form-control" value={email} error={emailError} />
        </div>

        <div className="mb-3">
          <select className="form-select" defaultValue={'defaultVal'} aria-label="Default select example" onChange={handleCountry}>
            <option value='defaultVal' disabled>Country</option>
            {countryList.map((countryList, index) => (
              <option key={index} value={countryList.code} >{countryList.name}</option>
            ))};
          </select><span className="erRed my-2">{countryError}</span>
        </div>

        <div className="mb-3 passIn">
          <Label labelName="Password" />
          <div className="position">
            <InputBox type={showPassword} handleChange={handlePassword} className="form-control" value={password} error={passwordError} /> <i className={showEye} onClick={handlePassClick} id="togglePassword"></i>
          </div>
        </div>

        <div className="mb-3">
          <Label labelName="Confirm Password" />
          <div className='position'>
            <InputBox type={showConfirmPassword} className="form-control" value={confirmPassword} handleChange={handleConfirmPassword} error={confirmPasswordError} /><i className={showEye1} onClick={handleConfirmPassClick} id="togglePassword"></i>

          </div>

        </div>

        <div className="mb-3 form-control radio-div">
          <div className="form-check form-check-inline">
            <Label labelName="Male" />
            <InputBox type="radio" value={gender === "male"} handleChange={handleRadioMale} name="gender" className="form-check-input" />
          </div>

          <div className="form-check form-check-inline">
            <Label labelName="Female" />
            <InputBox type="radio" value={gender === "Female"} name="gender" handleChange={handleRadioFemale} className="form-check-input" />
          </div>

          <div className="form-check form-check-inline">
            <Label labelName="Others" />
            <InputBox type="radio" handleChange={handleRadioOthers} name="gender" value={gender === "Other"} className="form-check-input" id="inlineRadio1" />
          </div>
        </div>
        <span className="erRed my-2">{genderError}</span>



        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" value='check me out' onChange={handleCheck} />
          <Label labelName="Check me out" />
        </div>
        <div>
          <Button buttonName={button} spin={spin} handleButtonClick={handleSubmit}
          />
          <p className="my-2">Already have a account? <a onClick={handleSubmit1} className="mx-2 my-2 linkbtn">Login</a></p>

        </div>



      </form>
      <ToastContainer />
    </>
  );
}

export default SignForm;