

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { SignUp } from "../Redux/signup/action";



// export const Signup = () => {
//     const { msg } = useSelector((store) => store.signReducer);
//     const [username, setUserName] = useState("");
    
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const dispatch = useDispatch();
  
//     const handleSubmit = (e) => {
//       console.log("Dispatch");
//       e.preventDefault();
//       const obj = { username, email, password };
//       dispatch(SignUp(obj));
//       console.log(msg);
//     };
    
  
//     return (
//       <>
//         {/* <img className="image" src={image} alt="error" width={"95%"} /> */}
//         <div className="img-head">
//           <h1>HOME</h1>
//           <h1>CREATE ACCOUNT</h1>
//         </div>
//         <div className="signup">
//           <div className="heading">
//             <b className="specal">CREATE</b>{" "}
//             <b style={{ fontWeight: "bold" }}>ACCOUNT</b>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <label className="label">
//               FIRST NAME:
//               <br />
//               <input
//                 className="input"
//                 type="text"
//                 value={username}
//                 name="username"
//                 onChange={(e) => setUserName(e.target.value)}
//               />
//             </label>
//             <br />
//             {/* <label className="label">
//               LAST NAME:
//               <br />
//               <input
//                 className="input"
//                 type="text"
//                 value={lastname}
//                 name="lastname"
//                 onChange={(e) => setlName(e.target.value)}
//               />
//             </label> */}
//             <br />
//             <label className="label">
//               EMAIL:
//               <br />
//               <input
//                 className="input"
//                 type="email"
//                 value={email}
//                 name="email"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </label>
//             <br />
//             <label className="label">
//               PASSWORD:
//               <br />
//               <input
//                 className="input"
//                 type="password"
//                 value={password}
//                 name="password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </label>
//             <br />
//             <button className="submit" type="submit">
//               CREATE
//             </button>
//           </form>
//         </div>
//       </>
//     );
//   };
  
//   export default Signup;




// import React, { useState } from "react";
// import axios from "axios";

// const Signup = () => {
//   const [username, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await axios.post(
//         "https://projectapi-by-anurag.onrender.com/users/register",
//         { username, email, password }
//       );
//       setSuccessMessage(response.data.msg);
//       setError("");
//     } catch (error) {
//       setError("An error occurred. Please try again.");
//     }

//     setIsLoading(false);
//   };

//   return (
//     <>
//       <div className="img-head">
//         <h1>HOME</h1>
//         <h1>CREATE ACCOUNT</h1>
//       </div>
//       <div className="signup">
//         <div className="heading">
//           <b className="specal">CREATE</b>{" "}
//           <b style={{ fontWeight: "bold" }}>ACCOUNT</b>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <label className="label">
//             FIRST NAME:
//             <br />
//             <input
//               className="input"
//               type="text"
//               value={username}
//               onChange={(e) => setUserName(e.target.value)}
//             />
//           </label>
//           <br />
//           <label className="label">
//             EMAIL:
//             <br />
//             <input
//               className="input"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </label>
//           <br />
//           <label className="label">
//             PASSWORD:
//             <br />
//             <input
//               className="input"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//           <br />
//           <button className="submit" type="submit" disabled={isLoading}>
//             {isLoading ? "Creating..." : "CREATE"}
//           </button>
//           {error && <p className="error">{error}</p>}
//           {successMessage && <p className="success">{successMessage}</p>}
//         </form>
//       </div>
//     </>
//   );
// };

// export default Signup;











import React, { useState } from "react";
import axios from "axios";

import "../Signup.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://arthub-be.onrender.com/users/register",
        { username, email, password }
      );
      setSuccessMessage(response.data.msg);
      setError("");
    } catch (error) {
      setError("An error occurred. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="signup-container">
      {/* <div className="img-header">
        <h1 className="header-text">HOME</h1>
        <h1 className="header-text">CREATE ACCOUNT</h1>
      </div> */}
      <div className="signup-form">
        <div className="form-heading">
          <b className="specal-text">CREATE</b>{" "}
          <b className="bold-text">ACCOUNT</b>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="input-label">
            FIRST NAME:
            <br />
            <input
              className="input-field"
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <br />
          <label className="input-label">
            EMAIL:
            <br />
            <input
              className="input-field"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label className="input-label">
            PASSWORD:
            <br />
            <input
              className="input-field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button className="submit-button" type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "CREATE"}
          </button>
          {error && <p className="error-text">{error}</p>}
          {successMessage && <p className="success-text">{successMessage}</p>}

          <p style={{color:"#06264a",fontWeight:"700"}}>Already  Registered? <Link to="/login">Login</Link></p>

        </form>
      </div>
    </div>
  );
};

export default Signup;