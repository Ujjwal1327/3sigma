import "./App.css";
import FormElement from "./component/FormElement";
import { FaUserAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

import { FaGlobe } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { LuClock4 } from "react-icons/lu";
import { IoIosList } from "react-icons/io";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="heading" id="heading1">
          <h2>Magnabox Private Limited</h2>
          <h3>3sigma</h3>
        </div>
        <div className="heading" id="heading2">
          <h4>Add new lead from</h4>
          <button>Cancel</button>
        </div>
        <form>
          <FormElement
            title="Lead Name"
            type="text"
            placeholder="Enter Lead Name"
          >
            <FaUserAlt className="icon" />
          </FormElement>

          <FormElement
            icon="⭐"
            title="Email Id"
            type="email"
            placeholder="Example@anyemail.com"
          >
            <IoMail className="icon" />
          </FormElement>

          <FormElement
            icon="⭐"
            title="Phone Number"
            type="number"
            placeholder="+91 8800688763"
          >
            <IoCall className="icon" />
          </FormElement>

          <FormElement
            title="Address"
            type="text"
            placeholder="Gugurgram ,India"
          >
            <FaGlobe className="icon" />
          </FormElement>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.968181185467!2d-122.1508573244209!3d37.4850772287954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc96de8dc419%3A0x64979e438bf4e3a5!2sMeta%20Headquarters!5e0!3m2!1sen!2sin!4v1700835459714!5m2!1sen!2sin"
            width="100%"
            height="150"
            allowfullscreen=""
            style={{ border: "0", borderRadius: "10px" }}
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <FormElement title="Sale value" type="number" placeholder="50,00,000">
            <FaRupeeSign className="icon" />
          </FormElement>

          <FormElement title="Date" type="text" placeholder="29 August 2023">
            <FaCalendarAlt className="icon" />
          </FormElement>

          <FormElement title="Time" type="text" placeholder="20:21 pm">
            <LuClock4 className="icon" />
          </FormElement>
          <div className="element">
            <label>Optioms</label>
            <div className="input-icon-feild">
              <IoIosList className="icon" />
              <select>
                <option>Options</option>
                <option>Electronics </option>
              </select>
              <MdOutlineArrowDropDownCircle className="icon" />
            </div>
          </div>
          <div className="element">
            <label>Products</label>
            <div className="input-icon-feild">
              <IoIosList className="icon" />
              <select>
                <option>Options</option>
                <option>Product1 : Item1 </option>
                <option>Product2 : Item2 </option>
                <option>Product3 : Item3 </option>
              </select>
              <MdOutlineArrowDropDownCircle className="icon" />
            </div>
          </div>
          <div className="element">
            <label>Note</label>
            <textarea type="text" rows="10" placeholder="Enter note" />
          </div>
          <button>Add Lead</button>
        </form>
      </div>
    </div>
  );
}

export default App;
