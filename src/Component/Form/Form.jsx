import React from "react";
import {useForm} from "react-hook-form"
import "./Form.css"

function Form(){
      const {register, handleSubmit, formState: {errors}} = useForm();
      const onSubmit = (data) => {
            console.log(data)
      };
      
      return (
          <form className="form__group" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form__groups">
                       <div className="input">
                              <label htmlFor="email">email:</label>
                              <input 
                                     placeholder="email123@gmail.com"
                                     type="email"
                                     name="email"
                                     {...register("email", {required: "please enter your email address",
                                       pattern: {
                                              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                              message: 'Please enter a valid email',
                                    } ,
                                   
                                   })}
                                     
                              />
                              {errors.email && <p className="error">{errors.email.message}</p>}
                        </div>
                        <div className="input">
                               <label htmlFor="textArea">your thought</label>
                               <textarea 
                                   type="text"
                                   name="textArea"
                                   {...register("textArea", {required: "kindly fill in your thought"})}
                               >
                               </textarea>
                               {errors.textArea && <p className="error">{errors.textArea.message}</p>}
                        </div>
                        <div className="input">
                         <button type="submit">submit</button>
                       </div>
                  
              
                  
                  </div>
                   
              </form>
            )
}
export default Form;