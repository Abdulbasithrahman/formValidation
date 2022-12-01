import './App.css';
import FormInput from './component/formInput/FormInput';
import React from 'react';
import Checkbox from './component/checkBox/Radiobox';
import DropDown from './component/dropDown/DropDown';
import FileUpload from './component/fileUpload/FileUpload';


function App() {

  const [values, setValues] = React.useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmpassword: "",
    gender: "",
    skill: [],
    file: ""
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "UserName should 3-16 characters",
      label: "Username",
      pattern: "^[A-za-z]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please enter valid email address",
      label: "Email",
      required: true
    }
    , {
      id: 3,
      name: "birthday",
      type: "date",
      label: "DOB",
      max:"2010-10-15",
      required: true
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "password",
      errorMessage: "password should be 8-20 characters and 1 character,1 special character,1 number",
      label: "Password",
      pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$",
      required: true
    }, {
      id: 5,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "password don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    }
  ]

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  const checkInputs = [{
    id: 7,
    name: "gender",
    type: "radio",
    label: "Male",
    value: "Male",
    required: true
  },
  {
    id: 8,
    name: "gender",
    type: "radio",
    label: "Female",
    value: "Female",
    required: true
  }, {
    id: 9,
    name: "gender",
    type: "radio",
    label: "Not prefer to say",
    value: "Not prefer to say",
    required: true
  }
  ]

  const skillOptions = [
    { value: 'java', label: 'Java' },
    { value: 'python', label: 'Python' },
    { value: 'React', label: 'React' },
    { value: 'nodejs', label: 'Nodejs' },
  ];

  const onChangeRadio = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }



  const OnChangedown = (e) => {
    let skills = [];
    if (Array.isArray(e)) {

      skills = (e.map(option => option.value));
    }
    setValues({
      ...values,
      skill: (skills)
    });
  }

  const getBase64 = file => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  const onLoad = file => {
    setValues({
      ...values,
      file
    })
  };
  const onChangeFile = e => {
    const files=e.target.files
    let file=files[0];
    if(file.size>3072000){
      e.target.value="";
      setValues({
        ...values,
        file:"error"
      })
    }else{
    getBase64(file)
    }
    
  };

  return (
    <div className='app'>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(values)
      }}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id}
            {...input} value={values[input.name]}
            onChange={onChange} />
        ))}
        <div className='option1'>
          <label className='rad-label'>Skills</label>
          <DropDown Optionsopt={skillOptions} OnChangedown={OnChangedown} {...skillOptions} />
        </div>

        <div className='option2'>
          <label className='rad-label'>Gender</label>

          {checkInputs.map((checkInput) => (
            <Checkbox key={checkInput.id} onChangeRadio={onChangeRadio}
              {...checkInput} />
          ))}
        </div>
        <div className='option2'>
          <label className='rad-label'>Upload Photo</label>
          <FileUpload onChange={onChangeFile}
           src={values.file!==""?values.file:null} 
           error_msg={values.file===""?`hide`:values.file==="error"?`error-msg`:`hide`}
          imgsize={values.file===""?`hide`:values.file==="error"?`hide`:`img-size`} />
          </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
