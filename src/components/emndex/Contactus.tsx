import ContactForm from "../common/ContactForm";
import MainGoogleMap from "../common/MainGoogleMap";

function Contactus(){
    return (
        <>
        <section className="relative min-h-[600px] justify-center items-center bg-gradient-to-b from-[rgb(9,3,26)] via-[#18041e] to-[rgb(9,3,26)] text-white overflow-hidden px-4">
            <ContactForm />
            <MainGoogleMap />
    </section>
    </>
    );
}
export default Contactus;