function Contact () {
    return(
        <>
            <form id="contact" className="form" action="https://formspree.io/f/xoqrkaae" method="POST">
                <input className="form__element form__text" type="text" name="Name" placeholder="Tu nombre" autoComplete="on" required maxLength={36}/>
                <input className="form__element form__email" type="email" name="Email" placeholder="Tu email" autoComplete="on" required/>
                <textarea className="form__element form__message" name="Message" placeholder="Que me quieres enviar?" autoComplete="off" required maxLength={500}></textarea>
                <input className="form__btn" type="submit" value="Enviar" />
            </form>
        </>
    )
}

export default Contact;