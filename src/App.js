import './App.css';
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import MUIComponentOne from './Component/MUIComponentOne';
import NewsArticle from './Component/NewsArticle';
import MUIIcon from './Component/MUIIcon';
import MyBox from './Component/MyBox';
import MUITable from './Component/MUITable';
import JobRegistrationForm from './Component/JobRegistrationForm';

import UserForm from './Component/UserForm';
import SimpleDialogDemo from './Component/SimpleDialogDemo';
function App() {
  return (
    <>
      {/* <NewsArticle />
      <MUIIcon /> */}
      <MyBox />
      {/* <MUITable /> */}
      <UserForm />
      {/* <JobRegistrationForm /> */}
      <SimpleDialogDemo />
    </>

  );
}

export default App;
