import InputField from "../forms/InputField.jsx";
import {useEffect, useState} from "react";
import Button from "../forms/Button.jsx";

const ContactFormSection = ({showModal = false, closeModal}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [showModalOverlay, setShowModalOverlay] = useState(false);

    const validationForm = () => {
        let inputError = {};
        if (!email.trim()) {
            inputError.email = "email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            inputError.email = "this email is not valid";
        }

        setErrors(inputError);
        return Object.keys(inputError).length === 0;
    }

    useEffect(() => {
        if (showModal) {
            const timeOutOverlay = setTimeout(() => {
                setShowModalOverlay(true)
            }, 300);

            return () => clearTimeout(timeOutOverlay);

        } else {
            setShowModalOverlay(false);
            setMessage('');
            setLastName('');
            setFirstName('');
            setEmail('');
            setErrors({});
        }

    }, [showModal]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validationForm()) {
            setMessage("your message has been successfully submitted ");

            setTimeout(() => {
                setMessage('');
                setLastName('');
                setFirstName('');
                setEmail('');
                setErrors({});
            }, 6000);


        }

    }

    return (
        <div>
            {showModal ? (
                <div className='modal-overlay'>
                    <div className={`modal ${showModalOverlay ? "active" : ""} `}>
                        <div className="modal-content">
                            <span className='close-button' onClick={closeModal}>&times;</span>
                            <h2>Personalized email campaigns that</h2>
                            <p>Aliquam erat volutpat. Nullam scelerisque auctor libero, id volutpat est dignissim
                                vitae.</p>

                            <form onSubmit={handleSubmit} className="form_contact">

                                <InputField
                                    id="firstName"
                                    name="firstName"
                                    value={firstName}
                                    label="Vorname"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />

                                <InputField
                                    id="lastName"
                                    name="lastName"
                                    value={lastName}
                                    label="Nachname"
                                    onChange={(e) => setLastName(e.target.value)}
                                />

                                <InputField
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    label="E-Mail-Adresse"
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                {errors.email && <div className="error"> {errors.email}</div>}

                                <Button type='submit' title="Absenden" variant="submit" className="btn"/>
                            </form>
                            {message && <p id='success_message' className='success_message'>{message}< /p>}
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    )

}

export default ContactFormSection;