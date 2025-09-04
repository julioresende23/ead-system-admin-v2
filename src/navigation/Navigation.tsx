import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import HomeTwo from '../pages/HomeTwo';
import HomeEight from '../pages/HomeEight';
import HomeSeven from '../pages/HomeSeven';
import HomeSix from '../pages/HomeSix';
import HomeFive from '../pages/HomeFive';
import HomeFour from '../pages/HomeFour';
import HomeThree from '../pages/HomeThree';
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
import Blog from '../pages/Blog';
import BlogTwo from '../pages/BlogTwo';
import BlogThree from '../pages/BlogThree';
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

const protect = (element: JSX.Element) => <RequireAuth>{element}</RequireAuth>;
const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-two" element={<HomeTwo />} />
        <Route path="/home-three" element={<HomeThree />} />
        <Route path="/home-four" element={<HomeFour />} />
        <Route path="/home-five" element={<HomeFive />} />
        <Route path="/home-six" element={<HomeSix />} />
        <Route path="/home-seven" element={<HomeSeven />} />
        <Route path="/home-eight" element={<HomeEight />} />
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-2" element={<BlogTwo />} />
        <Route path="/blog-3" element={<BlogThree />} />
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

        <Route path="/instructor-dashboard" element={protect(<InstructorDashboard />)} />
        <Route path="/instructor-profile" element={protect(<InstructorProfile />)} />
        <Route path="/instructor-enrolled-courses" element={protect(<InstructorEnrollCourse />)} />
        <Route path="/instructor-wishlist" element={protect(<InstructorWishlist />)} />
        <Route path="/instructor-review" element={protect(<InstructorReview />)} />
        <Route path="/instructor-attempts" element={protect(<InstructorAttempt />)} />
        <Route path="/instructor-history" element={protect(<InstructorHistory />)} />
        <Route path="/instructor-courses" element={protect(<InstructorCourses />)} />
        <Route path="/instructor-announcement" element={protect(<InstructorAnnouncement />)} />
        <Route path="/instructor-quiz" element={protect(<InstructorQuiz />)} />
        <Route path="/instructor-assignment" element={protect(<InstructorAssignment />)} />
        <Route path="/instructor-setting" element={protect(<InstructorSetting />)} />

        <Route path="/student-dashboard" element={protect(<StudentDashboard />)} />
        <Route path="/student-profile" element={protect(<StudentProfile />)} />
        <Route path="/student-enrolled-courses" element={protect(<StudentEnrollCourse />)} />
        <Route path="/student-wishlist" element={protect(<StudentWishlist />)} />
        <Route path="/student-review" element={protect(<StudentReview />)} />
        <Route path="/student-attempts" element={protect(<StudentAttempt />)} />
        <Route path="/student-history" element={protect(<StudentHistory />)} />
        <Route path="/student-setting" element={protect(<StudentSetting />)} />
        {/* <Route path="/blog-details/:id" element={<DynamicBlogDeatils />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppNavigation;
