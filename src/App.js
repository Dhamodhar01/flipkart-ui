import logo from "./logo.svg";
import "./App.css";
import Banana from "./Apple.jsx";
import Navbar from "./hooks/useState.jsx";
import UserProfile from "./hooks/useState2.jsx";
import Home from "./hooks/usestate3.jsx";
import Contact from "./listsandkeys/listandkey.jsx";
import DynamicList from "./listsandkeys/listandkey.jsx";
import EditableList from "./listsandkeys/listandkeys2.jsx";
import ConfirmableList from "./listsandkeys/listandkeys3.jsx";
import JobProfile from "./projects/job.jsx";
import Form from "./form/form.jsx";
import FileUploadForm from "./form/form1.jsx";
import ValidatedForm from "./form/form2.jsx";
import Weather from "./projects/job2.jsx";
import Header from "./firstproject/flipcart.jsx";
import ProductList from "./firstproject/flipcart1.jsx";
import Footer from "./firstproject/flipcart2.jsx";

function Apple() {
  return (
    <div className="App">
      <Header />
      <ProductList />
      <Footer />

      {/* <Weather /> */}
      {/* <ValidatedForm /> */}
      {/* <Form /> */}
      {/* <FileUploadForm /> */}
      {/* <Banana />
      <Navbar />
      <UserProfile /> */}
      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <DynamicList />
      <EditableList />
      <ConfirmableList /> */}
      {/* <JobProfile /> */}
    </div>
  );
}

export default Apple;
