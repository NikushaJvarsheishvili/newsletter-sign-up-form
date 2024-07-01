import "./App.css";
import illustrationDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import illustrationMobile from "./assets/images/illustration-sign-up-mobile.svg";
import iconList from "./assets/images/icon-list.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "./validationSchema";
import { Container } from "./Container";
import { useState } from "react";
import successIcon from "./assets/images/icon-success.svg";

function App() {
  const [isVisable, setIsVisable] = useState(false);
  const [email, setEmail] = useState("");

  const offers: string[] = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  interface Form {
    email: string;
  }

  const handleSubmit = (values: Form) => {
    setIsVisable(true);
    setEmail(values.email);
  };

  return (
    <>
      {isVisable ? (
        <Container isVisable={isVisable}>
          <img src={successIcon} alt="success-icon" />
          <div className="flex flex-col gap-5 border">
            <h2 className="text-5xl font-bold text-customSlateGrey">
              Thanks for subscribing!
            </h2>
            <p className="text-sm text-customCharcoalGrey">
              A Confirmation email has been sent to{" "}
              <span className="font-bold text-customSlateGrey">{email}</span>.
              Please open it and click the button inside to confirm your
              subscription.
            </p>
          </div>
          <button
            onClick={() => setIsVisable(false)}
            className="form-elements bg-customSlateGrey text-white font-medium md:hover:bg-gradient-primary"
          >
            Dismiss message
          </button>
        </Container>
      ) : (
        <Container isVisable={isVisable}>
          <div className=" border-red-500 p-10 flex flex-col gap-9">
            <h2 className="text-4xl font-bold text-customSlateGrey 2md:text-5xl">
              Stay updated!
            </h2>
            <p className="text-customSlateGrey font-medium text-sm max-w-80">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <div className="flex flex-col gap-3">
              {offers.map((offer, index) => {
                return (
                  <div key={index} className="flex gap-3">
                    <img src={iconList} alt="list-icon" className="h-6 w-6" />
                    <p>{offer}</p>
                  </div>
                );
              })}
            </div>
            <Formik
              validationSchema={validationSchema}
              initialValues={{ email: "" }}
              onSubmit={handleSubmit}
              validateOnChange={false}
            >
              {(formik) => {
                return (
                  <Form noValidate className="flex flex-col gap-3">
                    <label>
                      <div className="flex justify-between">
                        <span className="text-sm font-bold">Email address</span>
                        <ErrorMessage
                          className="text-customTomato text-sm font-bold"
                          name="email"
                          component="span"
                        />
                      </div>

                      <Field
                        className={`my-2 form-elements px-3 border-customGrey border ${
                          formik.errors.email && formik.touched.email
                            ? "input-error"
                            : ""
                        }`}
                        placeholder="email@company.com"
                        type="email"
                        name="email"
                      />
                    </label>
                    <button
                      className="bg-customCharcoalGrey md:hover:bg-gradient-primary transition-colors duration-500  text-white form-elements font-medium"
                      type="submit"
                    >
                      Subscribe to monthly newsletter
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div>
            <img
              className=" isHidden object-cover sm:max-w-sm  md:isVisable lg:max-w-2rem h-full "
              src={illustrationDesktop}
              alt="illustration-desktop"
            />
            <img
              className="isVisable md:isHidden w-full"
              src={illustrationMobile}
              alt="illustration-mobile"
            />
          </div>
        </Container>
      )}
    </>
  );
}

export default App;
