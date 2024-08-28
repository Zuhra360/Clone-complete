
import logo from '../images/logo.png'
import { useFormik } from 'formik';

export const Signin = () => {
    
    
    const formik = useFormik({
        initialValues: {
          email: '',
          password : '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.lastName = 'Must be atleast 8 characters';
    }
    return errors;
  };
      return (
        <div className="signin">
          <img src={logo} className="logo" />
        <div className=" text-black  ">
        <form className="flex  flex-col gap-3 bg-black w-80 h-140 pr-16 pl-16 my-20 ml-96 py-6 mr-60 items-center justify-center " onSubmit={formik.handleSubmit}>
          <label className="text-white text-xl font-semibold mt-5" htmlFor="firstName">Sign In </label>
          <label  className='text-white' htmlFor="email"> </label>
          <input
            className="h-9 w-56 bg-slate-800 text-white"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}

          
          <label className="text-white" ></label>
          <input
            className="h-9 w-56 bg-slate-800 text-white"
            id="password"
            name="password"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          <button className='text-white h-9 w-56 bg-red-700 mx-2.5' type="submit">Sign In</button>
          <label className='text-slate-300' >OR</label>
          <button className='text-white h-9 w-56 bg-slate-600 mx-2.5' type="submit">Use a sign-in code</button>
          <label className='text-white' >
            <a href="#">forgot password?</a>
          </label>
          <div className="flex items-center">
          <input type="checkbox" id="example" class="mr-2"/>
          <label className='text-slate-300 mr-8' >Remember Me</label>
          </div>

          <label className='text-white' >New to Netflix?
            <a href="#">Sign up now</a>
          </label>
          <label className='text-white mb-5' >This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <a href="#">Learn more.</a>
          </label>
        

        </form>
        </div>
        

        <div class="footer-section">
        <div class="footer">
        <h5>Questions? Call</h5>
        <a class="telephone-footer" href="tel:000-800-919-1694">000-800-919-1694</a>
        <div>
        <ul class="list-container">
            <li class="footer-list-items"><a role="link" class="footer-items" href="https://help.netflix.com/support/412">FAQ</a>
            </li>
            
  
            <li class="footer-list-items"><a role="link" class="footer-items" href="#">Cookie Preferences</a></li>
            <li class="footer-list-items"><a role="link" class="footer-items" href="https://help.netflix.com">Help
                Centre</a></li>

            <li class="footer-list-items"><a role="link" class="footer-items" href="https://help.netflix.com/legal/corpinfo">Corporate
                Information</a></li>
            <li class="footer-list-items"><a role="link" class="footer-items" href="https://help.netflix.com/legal/termsofuse">Terms
                of Use</a></li>
            <li class="footer-list-items"><a role="link" class="footer-items" href="https://help.netflix.com/legal/privacy">Privacy</a>
            </li>
          
        </ul>
        </div>


        <div class="lang-select footer-lang-select">
            <button className="lang-button bg-transparent color-white">
            
            <label for="lang-2" class="lang-select">
                
            <select id="lang-2" class="lang">
                <option value="option-1">English</option>
                <option value="option-2">हिन्दी</option>
            </select>
            <div>
            </div>
            </label>
            </button>
        </div>
        <h5>Netflix India</h5>
        </div>
        </div>
        </div>
      );
    
};
