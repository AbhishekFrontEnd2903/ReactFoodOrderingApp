import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>I'm about page</h1>
      <User name={"abhishek functional"} />
      <UserClass name={"abhishek class"} />
    </div>
  );
};

export default About;
