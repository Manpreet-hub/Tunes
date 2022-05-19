import { pageNotFound } from "../../assets/";
import "./pagenotFound.css";
export const PageNotFound = () => {
  return (
    <div className="pageNotFound-img">
      <img src={pageNotFound} alt="" width="760px" />
    </div>
  );
};
