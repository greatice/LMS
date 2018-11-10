import * as React               from 'react';
import {
    Redirect,
    Route,
    Switch,
    withRouter,
}                               from 'react-router-dom';
import CoursesPage from './pages/Courses';
import StudentsPage from './pages/Students';
import StudentPage from './pages/Student';
import CoursePage from './pages/Course';
import NewOrEditCoursePage from './pages/NewAndEditCourse';
import NewOrEditStudentPage from './pages/NewAndEditStudent';

const App = () => (
    <Switch>
        <Redirect exact from="/" to="/courses/" />
        <Route component={CoursesPage} exact path="/courses/" />
        <Route component={StudentsPage} exact path="/students/" />
        <Route component={NewOrEditStudentPage} exact path="/student/new" />
        <Redirect exact strict from="/student/:id" to="/student/:id/" />
        <Route component={StudentPage} exact strict path="/student/:id/" />
        <Route component={NewOrEditStudentPage} exact path="/student/:id/edit" />
        <Route component={NewOrEditCoursePage} exact path="/course/new" />
        <Redirect exact strict from="/course/:id" to="/course/:id/" />
        <Route component={CoursePage} exact strict path="/course/:id/" />
        <Route component={NewOrEditCoursePage} exact path="/course/:id/edit" />
    </Switch>
);

export default withRouter(App);
