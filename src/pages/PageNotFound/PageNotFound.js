import { pageNotFound } from "../../assets/";
import "./pagenotFound.css";
export const PageNotFound = () => {
  return (
    <div className="pageNotFound-img">
      <img src={pageNotFound} alt="404-pageNotFound" width="760px" />
    </div>
  );
};
