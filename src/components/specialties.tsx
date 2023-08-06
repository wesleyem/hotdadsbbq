import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBone,
  faAppleWhole,
  faCow,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

export default function Specialties() {
  return (
    <section className="page-section" id="specialties">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">At Your Service</h2>
        <hr className="divider" />
        <div className="row gx-4 gx-lg-5">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <FontAwesomeIcon icon={faBone} className="fs-1 text-primary" />
              </div>
              <h3 className="h4 mb-2">Rib-tastic Revelry</h3>
              <p className="text-muted mb-0">
                Sink Your Teeth into Our Team&apos;s Finger-Lickin&apos; Ribs,
                Bursting with Flavor and Fall-Off-The-Bone Goodness!
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <FontAwesomeIcon
                  icon={faAppleWhole}
                  className="fs-1 text-primary"
                />
              </div>
              <h3 className="h4 mb-2">Pulled Pork Perfection</h3>
              <p className="text-muted mb-0">
                Indulge in Our Team&apos;s Mouthwatering Melange of Smoky,
                Juicy, and Irresistibly Tender Delight!
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <FontAwesomeIcon icon={faCow} className="fs-1 text-primary" />
              </div>
              <h3 className="h4 mb-2">Brisket Bliss</h3>
              <p className="text-muted mb-0">
                Our Team&apos;s Tender and Smoky Masterpiece Will Leave You
                Craving for More!
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <FontAwesomeIcon
                  icon={faCheese}
                  className="fs-1 text-primary"
                />
              </div>
              <h3 className="h4 mb-2">Cheesy Delight</h3>
              <p className="text-muted mb-0">
                Dive into Creamy Bliss with Our Team&apos;s Irresistible Mac and
                Cheese, a Perfectly Melty and Comforting Culinary Escape!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
