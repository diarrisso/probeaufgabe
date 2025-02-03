<div class='modal-overlay' id='modalOverlay'>
    <div class='modal' id='contactModal'>
        <div class='modal-content'>
            <span class='close-button' id='closeModal'>&times;</span>
            <h2>Personalized email campaigns that</h2>
            <p>Aliquam erat volutpat. Nullam scelerisque auctor libero, id volutpat est dignissim vitae.</p>
            <form  method="post" action="ajax.php" id='contactForm' class=form_contact>

                <div class='form-group'>
                    <label for='firstName'>Vorname :</label>
                    <input type='text' id='firstName' name='firstName' >
                    <div class='error' id='firstName_feedback'></div>
                </div>

                <div class='form-group'>
                    <label for='lastName'>Nachname :</label>
                    <input type='text' id='lastName' name='lastName' >
                    <div class='error' id="lastName_feedback"></div>
                </div>

                <div class='form-group'>
                    <label for='email'>E-Mail-Adresse :<span>*</span></label>
                    <input type='email' id='email' name='email' required>
                    <div class="error" id="email_feedback"></div>
                </div>
                <button type='submit'>Absenden</button>

                <p id='success_message' class='success_message' style='visibility: hidden'></p>
            </form>
        </div>
    </div>
</div>