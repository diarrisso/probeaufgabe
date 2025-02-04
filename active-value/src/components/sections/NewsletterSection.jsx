import Button from "../forms/Button.jsx";

const NewsletterSection = () => {

    const handleNewsletterClick = () => {
        console.log('newsletter click')
    }

    return (

        <section className='newsletter_block' id='newsletter'>
            <div className='newsletter_block_flex'>
                <span>Newsletter</span>
                <h2>Nichts verpassen!</h2>
                <div>At wero iquam erat volutpat . Nullam scelerisque auctor libero</div>

                <Button
                    type="button"
                    title="Newsletter abonnieren"
                    variant="newsletterButton"
                    className="btn-newsletter"
                    onClick={handleNewsletterClick}
                />
            </div>
        </section>

    );

};

export default NewsletterSection;