import React from "react";
import {useFormik} from "formik";
import * as yup from 'yup';

const initialValues = {URL:""}
const onSubmit = (values) => {}
const validationSchema = yup.object({URL:yup.string().url("URL is not valid.") })


const UrlvalidComponent = () => {
  
  const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });
    
    return ( 
          <div>
             <form onSubmit={formik.handleSubmit}>
                <input
                  type="text"
                  name="URL"
                  value={formik.values.URL}
                  onChange={formik.handleChange}
                  className="url-input"
                  
                />
                {formik.errors.URL && (
                  <div className="error" style={{ color: "#F61C04" }}>{formik.errors.URL}</div>
                )}
                </form>
                
            </div>
         );
      }
 
export default UrlvalidComponent;








