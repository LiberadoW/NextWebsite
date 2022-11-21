import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.contact__title}>Kontakt</h2>
      <p className={styles.contact__text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className={styles.contact__mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.278442483485!2d-73.99012990268348!3d40.75896256225921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1spl!2spl!4v1668693602477!5m2!1spl!2spl"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
