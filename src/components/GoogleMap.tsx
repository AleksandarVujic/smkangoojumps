const GoogleMap = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1856.813545977607!2d19.227942152341114!3d44.54236077221127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759619441a59b15%3A0xc63f76d2d117954!2sFilipa%20Kljaji%C4%87a%201a%2C%20Loznica%2015300!5e0!3m2!1sen!2srs!4v1753271278255!5m2!1sen!2srs"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                border: 0,
                width: '100%',
                height: '100%',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
        />
    );
};

export default GoogleMap;