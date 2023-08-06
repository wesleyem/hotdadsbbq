import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h2 className="mt-0">Let&apos;s Get In Touch!</h2>
            <hr className="divider" />
            <p className="text-muted mb-5">
              Together, we can spread the love of barbecue, create lasting
              memories, and showcase your brand to a passionate community.
              Discover the exciting partnership opportunities and become a part
              of our sizzling success. Contact us now to explore how we can
              collaborate and make BBQ magic happen!
            </p>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-4 text-center mb-5 mb-lg-0">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="fs-2 mb-3 text-muted"
            />
            <div>hotdadsbbq@gmail.com</div>
          </div>
        </div>
      </div>
    </section>
  );
}
