import { useState, useRef } from 'react';
import emailjs from "@emailjs/browser"
import { Snackbar } from '@mui/material';
import { Container, Wrapper, Title, Desc, ContactForm, ContactTitle, ContactInput, ContactInputMessage, ContactButton } from "./ContactStyle";
import { motion } from "framer-motion"


const Contact = () => {

  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_qomwbye', 'template_qbbtfy8', form.current, 'rWHNcQoU_a80fWeOZ')
      .then((result) => {
        setOpen(true);

        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <Container>
      <motion.div>
        <Wrapper>
          <Title>Contact</Title>
          <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Email Me 🚀</ContactTitle>
            <ContactInput placeholder="Your Email" name="from_email" />
            <ContactInput placeholder="Your Name" name="from_name" />
            <ContactInput placeholder="Subject" name="subject" />
            <ContactInputMessage placeholder="Message" rows="4" name="message" />
            <ContactButton type="submit" value="Send" />
          </ContactForm>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            message="Email sent successfully!"
            severity="success"
          />
        </Wrapper>
      </motion.div>
    </Container>
  )
}

export default Contact
