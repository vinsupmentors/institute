import { useParams, Navigate } from "react-router-dom";
import courses from "../data/courses";
import CourseTemplate from "./CourseTemplate";

export default function CourseDetails() {
  const { slug } = useParams();

  const course = courses.find(c => c.slug === slug);

  // Safety: invalid or removed course
  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return <CourseTemplate {...course} />;
}
