import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../pages/Home'; 
import Course from '../pages/Course';
import Lesson from '../pages/Lesson';
import CourseDetails from '../pages/CourseDetails';
import About from '../pages/About';
import Instructor from '../pages/Instructor';
import InstructorDetails from '../pages/InstructorDetails';
import Event from '../pages/Event';
import EventDetails from '../pages/EventDetails';
import Shop from '../pages/Shop';
import ShopDetails from '../pages/ShopDetails';
import Cart from '../pages/Cart';
import Wishlist from '../pages/Wishlist';
import CheckOut from '../pages/CheckOut'; 
import BlogTwo from '../pages/Blog'; 
import BlogDetails from '../pages/BlogDetails';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Contact from '../pages/Contact';
import InstructorDashboard from '../pages/InstructorDashboard';
import InstructorProfile from '../pages/InstructorProfile';
import InstructorEnrollCourse from '../pages/InstructorEnrolledCourses';
import InstructorWishlist from '../pages/InstructorWishlist';
import InstructorReview from '../pages/InstructorReview';
import InstructorQuiz from '../pages/InstructorQuiz';
import InstructorHistory from '../pages/InstructorHistory';
import InstructorCourses from '../pages/InstructorCourses';
import InstructorAnnouncement from '../pages/InstructorAnnouncement';
import InstructorAssignment from '../pages/InstructorAssignment';
import InstructorSetting from '../pages/InstructorSetting';
import InstructorAttempt from '../pages/InstructorAttempt';
import StudentDashboard from '../pages/StudentDashboard';
import StudentProfile from '../pages/StudentProfile';
import StudentEnrollCourse from '../pages/StudentEnrolledCourses';
import StudentWishlist from '../pages/StudentWishlist';
import StudentReview from '../pages/StudentReview';
import StudentAttempt from '../pages/StudentAttempt';
import StudentHistory from '../pages/StudentHistory';
import StudentSetting from '../pages/StudentSetting';
import NotFound from '../pages/NotFound';
// Guards:
import RequireAuth from "@/auth/RequireAuth";
import PublicOnlyRoute from "@/auth/PublicOnlyRoute";

const protect = (element: JSX.Element, roles?: string | string[]) => (
  <RequireAuth allowedRoles={roles}>{element}</RequireAuth>
);
const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/instructors" element={<Instructor />} />
        <Route path="/instructor-details" element={<InstructorDetails />} />
        <Route path="/events" element={<Event />} />
        <Route path="/events-details" element={<EventDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-details" element={<ShopDetails />} />  
        <Route path="/blog" element={<BlogTwo />} /> 
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={
            <PublicOnlyRoute redirectTo="/student-dashboard">
              <Login />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/registration"
          element={
            <PublicOnlyRoute redirectTo="/student-dashboard">
              <Registration />
            </PublicOnlyRoute>
          }
        />
 
        <Route path="/cart" element={protect(<Cart />)} />
        <Route path="/wishlist" element={protect(<Wishlist />)} />
        <Route path="/check-out" element={protect(<CheckOut />)} />

         {/* role = Instructor */}
        <Route path="/instructor-dashboard" element={protect(<InstructorDashboard />, "Instructor")} />
        <Route path="/instructor-profile" element={protect(<InstructorProfile />, "Instructor")} />
        <Route path="/instructor-enrolled-courses" element={protect(<InstructorEnrollCourse />, "Instructor")} />
        <Route path="/instructor-wishlist" element={protect(<InstructorWishlist />, "Instructor")} />
        <Route path="/instructor-review" element={protect(<InstructorReview />, "Instructor")} />
        <Route path="/instructor-attempts" element={protect(<InstructorAttempt />, "Instructor")} />
        <Route path="/instructor-history" element={protect(<InstructorHistory />, "Instructor")} />
        <Route path="/instructor-courses" element={protect(<InstructorCourses />, "Instructor")} />
        <Route path="/instructor-announcement" element={protect(<InstructorAnnouncement />, "Instructor")} />
        <Route path="/instructor-quiz" element={protect(<InstructorQuiz />, "Instructor")} />
        <Route path="/instructor-assignment" element={protect(<InstructorAssignment />, "Instructor")} />
        <Route path="/instructor-setting" element={protect(<InstructorSetting />, "Instructor")} />

        {/* role = Student */}
        <Route path="/student-dashboard" element={protect(<StudentDashboard />, "Student")} />
        <Route path="/student-profile" element={protect(<StudentProfile />, "Student")} />
        <Route path="/student-enrolled-courses" element={protect(<StudentEnrollCourse />, "Student")} />
        <Route path="/student-wishlist" element={protect(<StudentWishlist />, "Student")} />
        <Route path="/student-review" element={protect(<StudentReview />, "Student")} />
        <Route path="/student-attempts" element={protect(<StudentAttempt />, "Student")} />
        <Route path="/student-history" element={protect(<StudentHistory />, "Student")} />
        <Route path="/student-setting" element={protect(<StudentSetting />, "Student")} />
       {/*   <Route path="/blog-details/:id" element={<DynamicBlogDeatils />} />   */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppNavigation;
